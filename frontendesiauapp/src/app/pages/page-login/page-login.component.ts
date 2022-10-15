import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/composants/services/authentication.service';
import { AppUser } from '../../composants/models/user';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/composants/services/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
   
  userFormGroup! : FormGroup

  errorMessage: any;

  authUser1: any = {}

 // users : AppUser[] = [];

  constructor(private fb: FormBuilder, private authService: AuthenticationService, 
    private router: Router,private toast: NgToastService, private userService: UserService) { }

  ngOnInit(): void {
 
    this.userFormGroup = this.fb.group({
       username : this.fb.control(""),
       password : this.fb.control("")
    });
  }

  handleLogin(){
    let username=this.userFormGroup.value.username
    let password=this.userFormGroup.value.password

    this.authService.login(username,password).subscribe( {
      next: (appUser: AppUser) => {

      this.authService.authenticationUser(appUser).subscribe({
        next: (data: boolean)=>{
         
          this.router.navigateByUrl("/dashboard");
          this.toast.success({detail:"Mesage de reussite",summary:"Connexion effectuée avec succès",duration:3000});
   
        }
      });
    },
    error: (err) =>{

       this.errorMessage = err;
       

    }});
  }

}
