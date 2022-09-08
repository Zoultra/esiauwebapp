import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Departement } from '../../../composants/models/departement';
import { DepartementService } from '../../../composants/services/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrls: ['./create-departement.component.scss']
})
export class CreateDepartementComponent implements OnInit {
  departement: Departement = new Departement();
  constructor(private departementService: DepartementService ,private toast: NgToastService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.saveDepartement();
    console.log(this.departement);
    }
    saveDepartement(): void{
  
     
      
      this.departementService.createDepartement(this.departement).subscribe(data =>{
         console.log(data);
         this.goToDepartementList();
         this.toast.success({detail:"Mesage de reussite",summary:"Departement enrégistré avec succès",duration:5000});
       },
     error => {
       //this.errorMsg = error.error.errors;
       this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:5000});
     })
     } 
     goToDepartementList(){
      this.router.navigate(['/dashboard/list-departement']); 
    } 

}
