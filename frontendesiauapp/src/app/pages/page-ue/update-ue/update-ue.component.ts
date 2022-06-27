import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UE } from 'src/app/composants/models/ue';
import { UeService } from '../../../composants/services/ue.service';

@Component({
  selector: 'app-update-ue',
  templateUrl: './update-ue.component.html',
  styleUrls: ['./update-ue.component.scss']
})
export class UpdateUeComponent implements OnInit {
   ue : UE = new UE();
   idUe!: number;
  constructor(private router: Router,private route: ActivatedRoute, private ueService: UeService, private toast: NgToastService,) { }

  ngOnInit(): void {
    this.idUe = this.route.snapshot.params['idUe']
    this.ueService.getUeById(this.idUe).subscribe(data => {
      this.ue = data;
      console.log(data);
  },error => console.log(error));
  }

  
onSubmit(){
  this.updateUe(); 
  }

  updateUe(): void{
this.ueService.updateUe(this.idUe, this.ue).subscribe(data =>{
  this.goToUeList();  
   this.toast.success({detail:"Mesage de reussite",summary:"Ue modifié avec succès",duration:5000})
 },error => {this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:5000});
})
}
goToUeList(){
  this.router.navigate(['/list-ue']);
} 

}
