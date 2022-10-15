import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Personnel } from '../../../composants/models/personnel';
import { PersonnelService } from '../../../composants/services/personnel.service';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.scss']
})
export class ListPersonnelComponent implements OnInit {
  personnels: Personnel[] = []
  idPersonnel!: number
  dtOptions: DataTables.Settings = {};
  myFilterText!:any

  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  constructor( private router: Router, private personnelService: PersonnelService,private toast: NgToastService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
      this.getPersonnelList()
  }

  private getPersonnelList(){
    this.personnelService.getPersonnelList().subscribe(data => {
      this.personnels = data;
      console.log(data);
    });
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.getPersonnelList()
  }

  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPersonnelList()
  }

  
  updatePersonnel(idPersonnel: number){
    this.router.navigate(['dashboard/update-personnel', idPersonnel]);
  }

  deletePersonnel(idPersonnel: number){
 
this.personnelService.deletePersonnel(idPersonnel).subscribe( data => {
  console.log(data);
 this.toast.success({detail:"Mesage de reussite",summary:"Personnnel supprimée avec succès",duration:2000});
 setTimeout(() => {
  this.reloadPage();
 }, 2000);

},
error => {
  this.toast.error({detail:"Message d'erreur",summary:"Echec, des prets sont enregistrés au nom de cet emploiyé",duration:5000});
}
)

  }


/* reload*/
reloadPage(){
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], {
    relativeTo: this.route
  })
}

}
