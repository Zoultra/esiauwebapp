import { Injectable } from '@angular/core';
import { AppUser } from '../models/user';
import { Observable, of, throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users : AppUser[] = [];

  authenticatedUser : AppUser | undefined;

  constructor(private userService: UserService) { 
   
    this.userService.getUserList().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  ngOnInit(): void {

   

  }
  
  
  
  public login(username: string, password: string): Observable<AppUser>{

   

     let user = this.users.find(U => U.username==username);

     if(!user) return throwError(() => new Error("Utulisateur Introuvable"));

     if(user.password!=password){
          return throwError(() => new Error("Mot de passe incorrect"));
     }

     return of(user);
  }

  public authenticationUser(user: AppUser): Observable<boolean>{
    this.authenticatedUser = user; 
    
    const token = this.authenticatedUser.userId
    localStorage.setItem("authUser", JSON.stringify({username: user.username, roles: user.roles, 'token': token}))
    
    
    return of(true);
  }

  public hasRole(role: string): boolean {
   return  this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated(){

    return this.authenticatedUser!=undefined;
  }

  public logout(): Observable<boolean>{

    this.authenticatedUser=undefined;

    localStorage.removeItem("authUser");
    
    
    return of(true);
  }
}
