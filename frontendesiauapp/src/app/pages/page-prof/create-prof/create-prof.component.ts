import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProfService } from '../../../composants/services/prof.service';
import { Professeur } from '../../../composants/models/prof';

@Component({
  selector: 'app-create-prof',
  templateUrl: './create-prof.component.html',
  styleUrls: ['./create-prof.component.scss']
})
export class CreateProfComponent implements OnInit {
   
  prof : Professeur = new Professeur()
  constructor(private profService: ProfService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveProf();
    console.log(this.prof);
    }

  saveProf(): void{
    this.profService.createProfesseur(this.prof).subscribe(data =>{
       console.log(data);
       this.goToProfList();
       this.toast.success({detail:"Mesage de reussite",summary:"Etudiant enrégistré avec succès",duration:5000});
     },
   error => {
     this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:5000});
   })
   }
   
   goToProfList(){
    this.router.navigate(['professeur-list/']);
    
  }


}
