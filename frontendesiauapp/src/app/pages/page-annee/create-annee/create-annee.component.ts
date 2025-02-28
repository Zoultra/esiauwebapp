import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AnneeService } from 'src/app/composants/services/annee.service';
import { Annee } from '../../../composants/models/annee';

@Component({
  selector: 'app-create-annee',
  templateUrl: './create-annee.component.html',
  styleUrls: ['./create-annee.component.scss']
})
export class CreateAnneeComponent implements OnInit {
  annee : Annee = new Annee()

  constructor(private anneeService: AnneeService, private router : Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    this.saveAnnee();
  }

  saveAnnee(){
      this.anneeService.createAnnee(this.annee).subscribe( data =>{
       console.log(data)
       this.goToAnneeList()
       this.toast.success({detail:"Mesage de reussite",summary:"Année enrégistrée avec succès",duration:4000});
      // console.log(this.today.toString());
     })
   }
   goToAnneeList(){
     this.router.navigate(['/dashboard/gestion-annee/list-annee']);
   }

}
