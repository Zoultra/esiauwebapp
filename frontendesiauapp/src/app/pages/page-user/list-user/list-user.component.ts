import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AppUser } from '../../../composants/models/user';
import { UserService } from '../../../composants/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
   
  users: AppUser[] = []
  userId!: number
  dtOptions: DataTables.Settings = {};

  constructor(private userService: UserService,private toast: NgToastService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true
      
    };

    this.getUserList();
  }

  private getUserList(){
    this.userService.getUserList().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  
  updateUser(userId: number){
    this.router.navigate(['dashboard/gestion-user/update-user', userId]);
  }

  deleteUser(userId: number){
 
this.userService.deleteUser(userId).subscribe( next => {
 
 this.toast.success({detail:"Mesage de reussite",summary:"Utilisateur supprimée avec succès",duration:2000});
 setTimeout(() => {
  this.reloadPage();
 }, 2000);

},
error => {
  this.toast.error({detail:"Message d'erreur",summary:"Echec, reéssayer encore",duration:5000});
}
)

  }


/* reload*/
reloadPage(){
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], {
    relativeTo: this.route
  })
}



}
