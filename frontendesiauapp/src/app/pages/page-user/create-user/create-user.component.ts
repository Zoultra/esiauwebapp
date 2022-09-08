import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/composants/services/user.service';
import { AppUser } from '../../../composants/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private toast: NgToastService, private userService: UserService) { }
    
  
  user : AppUser = new AppUser()

  ngOnInit(): void {
  }
    
  onSubmit(){
    this.saveUser()
  }

  saveUser(){
    
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data)
      this.toast.success({detail:"Mesage de reussite",summary:"Utilisateur enrégistré avec succès",duration:4000});
    },
    error => {
      this.toast.error({detail:"Message d'erreur",summary:"Echec d'enrégistrement, réessayer encore",duration:5000});
     })
  }

}
