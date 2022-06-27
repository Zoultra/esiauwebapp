import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Matiere } from 'src/app/composants/models/matiere';
import { MatiereService } from '../../../composants/services/matiere.service';

@Component({
  selector: 'app-update-matiere',
  templateUrl: './update-matiere.component.html',
  styleUrls: ['./update-matiere.component.scss']
})
export class UpdateMatiereComponent implements OnInit {

  matiere : Matiere = new Matiere()
  idMatiere! : number
  errorMsg: Array<string> = [];
  //ues : Array<UE> = []

  constructor
    (
    private toast: NgToastService,
    private router: Router,  
    private route: ActivatedRoute,
    private matiereService: MatiereService
    ) { }

  ngOnInit(): void {
    this.idMatiere = this.route.snapshot.params['idMatiere'];
    
    this.matiereService.getMatiereById(this.idMatiere).subscribe(data => {
      this.matiere = data;
      console.log(data);

  },error => console.log(error));
  }
  
onSubmit(){
  this.updateMatiere(); 
  }

  //Methode pour enregistrer un etudiant
  updateMatiere(): void{
  this.matiereService.updateMatiere(this.idMatiere, this.matiere).subscribe(data =>{
    this.goToMatiereList();
     this.toast.success({detail:"Mesage de reussite",summary:"Etudiant modifié avec succès",duration:5000});
   },
  error => {
   this.errorMsg = error.error.errors
   this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:5000});
  })
  }
  goToMatiereList(){
    this.router.navigate(['/list-matiere']);
  }
}
