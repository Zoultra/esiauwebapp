import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfService } from '../../../composants/services/prof.service';
import { Professeur } from '../../../composants/models/prof';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-update-prof',
  templateUrl: './update-prof.component.html',
  styleUrls: ['./update-prof.component.scss']
})
export class UpdateProfComponent implements OnInit {

  prof: Professeur = new Professeur()
  idProf!: number

  constructor(private router: Router,private route: ActivatedRoute, private profService: ProfService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.idProf = this.route.snapshot.params['idProf']
    this.profService.getProfesseurById(this.idProf).subscribe(data => {
      this.prof = data;
      console.log(data);
  },error => console.log(error));
  }

   
onSubmit(){
  this.updateProf(); 
  }

  updateProf(): void{
this.profService.updateProfesseur(this.idProf, this.prof).subscribe(data =>{
  this.goToProfList();  
   this.toast.success({detail:"Mesage de reussite",summary:"Professeur modifié avec succès",duration:5000})
 },
error => {
  
 this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:5000});
})

}
goToProfList(){
  this.router.navigate(['professeur-list/']);
  
}

}
