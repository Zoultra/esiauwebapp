import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Departement } from 'src/app/composants/models/departement';
import { UE } from 'src/app/composants/models/ue';
import { DepartementService } from 'src/app/composants/services/departement.service';
import { UeService } from '../../../composants/services/ue.service';

@Component({
  selector: 'app-create-ue',
  templateUrl: './create-ue.component.html',
  styleUrls: ['./create-ue.component.scss']
})
export class CreateUeComponent implements OnInit {

  ue: UE = new UE();
  idUe!: number;
  departementDto : any = {}
  departements: Array<Departement> = [];

  constructor(private ueService : UeService, private router: Router, private toast: NgToastService,
     private departementService: DepartementService) { }

  ngOnInit(): void {
    this.departementService.getDepartements().subscribe(data => {
      this.departements = data;
  });
  }

  onSubmit(){
    this.saveUe();
    console.log(this.ue);
    }
    saveUe(): void{
  
      this.ue.departement = this.departementDto;
      
      this.ueService.createUe(this.ue).subscribe(data =>{
         console.log(data);
         this.goToUeList();
         this.toast.success({detail:"Mesage de reussite",summary:"Etudiant enrégistré avec succès",duration:5000});
       },
     error => {
       //this.errorMsg = error.error.errors;
       this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:5000});
     })
     } 
     goToUeList(){
      this.router.navigate(['/list-ue']);
      
    } 

     

}
