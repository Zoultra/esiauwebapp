import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DepartementService } from 'src/app/composants/services/departement.service';
import { Departement } from '../../../composants/models/departement';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.scss']
})
export class ListDepartementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  departements: Departement[] = [];
  
  myFilterText!:any
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  
  constructor(private departementService: DepartementService, private router: Router,private toast: NgToastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepartements()
  }


 // Methode pour recuperer la liste de tous les departements
 private getDepartements() {
  this.departementService.getDepartements().subscribe(data => {
    this.departements = data;
});
}

// Methode pour editer un departement
updateDepartement(idDepartement: number){
  this.router.navigate(['dashboard/update-departement',idDepartement]);
}

onTableDataChange(event: any){
  this.page = event;
  this.getDepartements()
}

onTableSizeChange(event: any){
  this.tableSize = event.target.value;
  this.page = 1;
  this.getDepartements()
}

deleteDepartement(idDepartement: number){
  
//Methode pour supprimer un departement
  this.departementService.deleteDepartemnt(idDepartement).subscribe( data => {
    console.log(data);
    this.getDepartements() 
   this.toast.success({detail:"Mesage de reussite",summary:"Departement supprimé avec succès",duration:4000});
   setTimeout(() => {
    this.reloadPage();
   }, 5000);
 
  },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
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
