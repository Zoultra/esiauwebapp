import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
      
  }
  handleLogout(){

    this.authService.logout().subscribe({
      next:()=>{
        this.router.navigateByUrl("/login")
      }
    });

  }
}
