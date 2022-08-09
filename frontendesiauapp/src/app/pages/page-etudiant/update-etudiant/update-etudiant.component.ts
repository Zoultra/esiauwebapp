import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Etudiant } from 'src/app/composants/models/etudiant';
import { ClasseService } from 'src/app/composants/services/classe.service';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent implements OnInit {
  idEtudiant!: number;
  etudiant : Etudiant = new Etudiant();

  //listNiv: Array<Niveau> = [];
  listClasse: Array<any> = [];
  
  //niveauDto : any={};
 // classeDto : any={}; 
  
  errorMsg: Array<string> = [];

  constructor( 
      private classeService: ClasseService,
    //  private niveauService: NiveauService,
      private etudiantService: EtudiantService,
      private toast: NgToastService,
      private router: Router,  
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params['idEtudiant'];
    
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(data => {
      this.etudiant = data;
      console.log(data);

  },error => console.log(error));

}

onSubmit(){
  this.updateEtudiant(); 
  }

  //Methode pour enregistrer un etudiant
updateEtudiant(): void{

//this.etudiant.niveau = this.niveauDto;

//this.etudiant.classe = this.classeDto;

this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiant).subscribe(data =>{
  this.goToEtudiantList();
   this.toast.success({detail:"Mesage de reussite",summary:"Etudiant modifié avec succès",duration:5000});
 },
error => {
 this.errorMsg = error.error.errors
 ;
 this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:5000});
})

}
goToEtudiantList(){
  this.router.navigate(['/list-etudiant']);
} 
}
