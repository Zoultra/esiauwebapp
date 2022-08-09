import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../../../composants/services/etudiant.service';
import { NgToastService } from 'ng-angular-popup';
import { ClasseService } from '../../../composants/services/classe.service';
import { Etudiant } from 'src/app/composants/models/etudiant';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  listClasse: Array<any> = [];
  classeDto : any={}; 
  idEtudiant!: number;
  listEtudiant: Array<Etudiant> = [];
  //listClasse: Array<Classe> = [];
  
  etudiant: Etudiant = new Etudiant();
  etudiantDto : any={};

 toasts: any[] = [];
 myFilterText!:any

  constructor( private etudiantService: EtudiantService,  private router: Router,private toast: NgToastService,
     private classeService: ClasseService) { }

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

  this.getEtudiants();

  this.classeService.getClasseList()
  .subscribe(classes => {
    this.listClasse = classes;
  });

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

// Methode pour editer un etudiant
noteEtudiant(idEtudiant: number){
  this.router.navigate(['note-etudiant', idEtudiant]);
}



/* reload*/
reloadPage(){
  window.location.reload();
}
 
reinscription(idEtudiant: number): void{

 this.idEtudiant =idEtudiant;
  
  this.etudiant.classe = this.classeDto;
  
  this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiant).subscribe(data =>{
    this.reloadPage()
     this.toast.success({detail:"Mesage de reussite",summary:"Réinscription  effectuée avec succès",duration:4000});
   },
  error => { 
   this.toast.error({detail:"Message d'erreur",summary:"Echec, réessayer encore",duration:5000});
  })
 
  }
}
