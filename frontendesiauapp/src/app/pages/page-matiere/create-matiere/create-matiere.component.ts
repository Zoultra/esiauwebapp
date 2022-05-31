import { Component, OnInit } from '@angular/core';
import { UE } from 'src/app/composants/models/ue';
import { Matiere } from '../../../composants/models/matiere';
import { UeService } from '../../../composants/services/ue.service';
import { Router } from '@angular/router';
import { MaitereService } from '../../../composants/services/maitere.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-matiere',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.scss']
})
export class CreateMatiereComponent implements OnInit {
 
  matiere : Matiere = new Matiere()

  ues : Array<UE> = []

  ueDto : any = {}

  constructor(private ueService : UeService, private matiereService : MaitereService, private router : Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.ueService.getUeList()
    .subscribe(data => {
      this.ues = data;
    });
  }

  onSubmit(){
    this.saveMatiere();
  }

  saveMatiere(){
    this.matiere.ue = this.ueDto
    this.matiereService.createMatiere(this.matiere).subscribe( data =>{
      console.log(data)
      this.goToMatiereList()
      this.toast.success({detail:"Mesage de reussite",summary:"Matière enrégistrée avec succès",duration:5000});
    })
  }
  goToMatiereList(){
    this.router.navigate(['/list-matiere']);
  }

}
