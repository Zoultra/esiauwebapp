import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor( private router: Router, private personnelService: PersonnelService,private toast: NgToastService) { }

  ngOnInit(): void {
      this.getPersonnelList()
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
  }

  private getPersonnelList(){
    this.personnelService.getPersonnelList().subscribe(data => {
      this.personnels = data;
      console.log(data);
    });
  }

  
  updatePersonnel(idPersonnel: number){
    this.router.navigate(['update-personnel', idPersonnel]);
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
  this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
}
)

  }


/* reload*/
reloadPage(){
  window.location.reload();
}

}
