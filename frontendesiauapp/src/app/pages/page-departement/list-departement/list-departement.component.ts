import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  departements: Array<Departement> = [];
  constructor(private departementService: DepartementService, private router: Router,private toast: NgToastService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
      stateSave: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },
  }
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
  this.router.navigate(['update-departement',idDepartement]);
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
  window.location.reload();
}
}
