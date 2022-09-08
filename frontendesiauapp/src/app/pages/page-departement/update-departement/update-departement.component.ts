import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Departement } from 'src/app/composants/models/departement';
import { DepartementService } from '../../../composants/services/departement.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.scss']
})
export class UpdateDepartementComponent implements OnInit {

  constructor(
    private router: Router,private route: ActivatedRoute,
    private toast: NgToastService,private departementService: DepartementService) { }
  departement: Departement = new Departement();
  idDepartement!: number 
  ngOnInit(): void {
    this.idDepartement = this.route.snapshot.params['idDepartement']
    this.departementService.getDepartementById(this.idDepartement).subscribe(data => {
      this.departement = data;
      console.log(data);
  },error => console.log(error));
  }
  
 
  onSubmit(){
    this.updateDepartement(); 
    }
    updateDepartement(): void{
      this.departementService.updateDepartement(this.idDepartement, this.departement).subscribe(data =>{
        this.goToDepartementList();  
         this.toast.success({detail:"Mesage de reussite",summary:"Departement modifié avec succès",duration:4000})
       },error => {this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:4000});
      })
    }
    goToDepartementList(){
      this.router.navigate(['/dashboard/list-departement']); 
    }
}
