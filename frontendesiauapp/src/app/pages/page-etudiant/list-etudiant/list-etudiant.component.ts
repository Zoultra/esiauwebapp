import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../../../composants/services/etudiant.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
   
  listEtudiant: Array<any> = [];
  //listClasse: Array<Classe> = [];
  
 // etudiant: Etudiant = new Etudiant();

 toasts: any[] = [];

  constructor( private etudiantService: EtudiantService,  private router: Router,private toast: NgToastService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },
  }

  this.getEtudiants();
}
  

 // Methode pour recuperer la liste de tous les niveaux
 private getEtudiants() {
  this.etudiantService.getEtudiantList().subscribe(data => {
    this.listEtudiant = data;
});
}

 // Methode pour editer un etudiant
 updateEtudiant(idEtudiant: number){
  this.router.navigate(['etudiant', idEtudiant]);
}

deleteEtudiant(idEtudiant: number){
  
//Methode pour supprimer un etudiant
  this.etudiantService.deleteEtudiant(idEtudiant).subscribe( data => {
    console.log(data);
    this.getEtudiants() 
   this.toast.success({detail:"Mesage de reussite",summary:"Etudiant supprimé avec succès",duration:4000});
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
