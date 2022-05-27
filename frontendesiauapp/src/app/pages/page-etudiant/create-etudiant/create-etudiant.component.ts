import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Classe } from 'src/app/composants/models/classe';
import { Niveau } from 'src/app/composants/models/niveau';
import { ClasseService } from 'src/app/composants/services/classe.service';
import { NiveauService } from 'src/app/composants/services/niveau.service';
import { Etudiant } from '../../../composants/models/etudiant';
import { EtudiantService } from '../../../composants/services/etudiant.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.scss']
})
export class CreateEtudiantComponent implements OnInit {
   
  etudiant : Etudiant = new Etudiant();

  //listNiv: Array<Niveau> = [];
  listClasse: Array<any> = [];
  
  //niveauDto : any={};
  classeDto : any={}; 

  
  
  errorMsg: Array<string> = [];
   

  constructor(
     private classeService: ClasseService,
  //  private niveauService: NiveauService,
    private etudiantService: EtudiantService,
    private router: Router,
    private toast: NgToastService
    ) { }

  ngOnInit(): void {

    //this.niveauService.getNiveauList()
    //.subscribe(niveaux => {
    //  this.listNiv = niveaux;
    //});

    this.classeService.getClasseList()
    .subscribe(classes => {
      this.listClasse = classes;
    });

  }

  onSubmit(){
    this.saveEtudiant();
    console.log(this.etudiant);
    }

    // Methode pour enregistrer un etudiant
saveEtudiant(): void{
  
  //this.etudiant.niveau = this.niveauDto;
  this.etudiant.classe = this.classeDto;
  
  this.etudiantService.createEtudiant(this.etudiant).subscribe(data =>{
     console.log(data);
     this.goToEtudiantList();
     this.toast.success({detail:"Mesage de reussite",summary:"Etudiant enrégistré avec succès",duration:5000});
   },
 error => {
   this.errorMsg = error.error.errors;
   this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:5000});
 })
 } 
 goToEtudiantList(){
  this.router.navigate(['/list-etudiant']);
} 
}
