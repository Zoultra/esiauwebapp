import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Personnel } from 'src/app/composants/models/personnel';
import { PersonnelService } from 'src/app/composants/services/personnel.service';

@Component({
  selector: 'app-update-personnel',
  templateUrl: './update-personnel.component.html',
  styleUrls: ['./update-personnel.component.scss']
})
export class UpdatePersonnelComponent implements OnInit {

  personnel : Personnel = new Personnel()
  idPersonnel!: number

  constructor(private router: Router,private route: ActivatedRoute,private personnelService: PersonnelService,private toast: NgToastService) { }

  ngOnInit(): void {

    this.idPersonnel = this.route.snapshot.params['idPersonnel']
    this.personnelService.getPersonnelById(this.idPersonnel).subscribe(data => {
      this.personnel = data;
      console.log(data);
  },error => console.log(error));
    
  }
  
  onSubmit(){
    this.updatePersonnel()
  }
  updatePersonnel(): void{
    this.personnelService.updatePersonnel(this.idPersonnel, this.personnel).subscribe(data =>{
      this.goToPersonnelList();  
       this.toast.success({detail:"Mesage de reussite",summary:"Professeur modifié avec succès",duration:5000})
     },
    error => {
      
     this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:5000});
    })
    
    }

    goToPersonnelList(){
      this.router.navigate(['/list-personnel']);
    }

}
