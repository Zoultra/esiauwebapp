import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/composants/services/user.service';
import { AppUser } from '../../../composants/models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  
  user : AppUser = new AppUser()
  userId!: number
  
  constructor(private userService: UserService,private toast: NgToastService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId']
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
      console.log(data);
  },error => console.log(error));
  }

  onSubmit(){
    this.updateUser()
  }
  updateUser(): void{
    this.userService.updateUser(this.userId, this.user).subscribe(data =>{
       this.toast.success({detail:"Mesage de reussite",summary:"Utilisateur modifié avec succès",duration:3000})
     },
    error => {
     this.toast.error({detail:"Message d'erreur",summary:"Echec d'enregistrement, réessayer encore",duration:3000});
    })
    
    }

}
