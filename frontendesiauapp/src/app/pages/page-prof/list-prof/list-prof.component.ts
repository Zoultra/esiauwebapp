import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/composants/services/prof.service';
import { Professeur } from '../../../composants/models/prof';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {
   
  profs: Array<Professeur> = [];

  constructor(private profService: ProfService, private router: Router, private toast:NgToastService ) { }

  ngOnInit(): void {
    this.getProfList()
  }

   // Methode pour recuperer la liste de tous les profs
 private getProfList() {
  this.profService.getProfesseurList().subscribe(data => {
    this.profs = data;
    console.log(data);
});
}
// Methode pour la modif

updateProf(idProf: number){
  this.router.navigate(['update-prof', idProf]);
}

//Methode pour supprimer un prof
deleteProf(idProf: number){
  

  this.profService.deleteProfesseur(idProf).subscribe( data => {
    console.log(data);
    this.getProfList() 
   this.toast.success({detail:"Mesage de reussite",summary:"Professeur supprimé avec succès",duration:4000});
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
