import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Personnel } from 'src/app/composants/models/personnel';
import { PersonnelService } from 'src/app/composants/services/personnel.service';

@Component({
  selector: 'app-create-personnel',
  templateUrl: './create-personnel.component.html',
  styleUrls: ['./create-personnel.component.scss']
})
export class CreatePersonnelComponent implements OnInit {
  
  personnel : Personnel = new Personnel()

  constructor(private toast: NgToastService,private personnelService: PersonnelService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.savePersonnel();
  }
  savePersonnel(){
    this.personnel.username = "zou"
    this.personnel.password = "zou"
    this.personnel.roles = "admin"
    this.personnelService.createPersonnel(this.personnel).subscribe( data =>{
      console.log(data)
      this.goToPersonnelList()
      this.toast.success({detail:"Mesage de reussite",summary:"Personnel enrégistré avec succès",duration:3000});
    })
  }
  goToPersonnelList(){
    this.router.navigate(['/list-personnel']);
  }
}
