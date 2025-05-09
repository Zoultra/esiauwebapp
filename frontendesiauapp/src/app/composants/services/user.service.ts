import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  private baseURL = `${environment.apiUrl}/user`;
  

  constructor(private httpClient: HttpClient) { }

  
  getUserList(): Observable<AppUser[]>{
    return this.httpClient.get<AppUser[]>(`${this.baseURL}`);
  }

  createUser(appUser: AppUser): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, appUser);
  }
  
  updateUser(userId: number, appUser: AppUser): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${userId}`, appUser);
  }

  deleteUser(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
  getUserById(userId: number): Observable<AppUser>{
    return this.httpClient.get<AppUser>(`${this.baseURL}/${userId}`);
  }
}
