import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from '../models/personnel';
import { Pret } from '../models/pret';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private baseURL = `${environment.apiUrl}/personnel`;
  private baseURL2 = `${environment.apiUrl}/pret`;
  private baseURL3 = `${environment.apiUrl}/pret/personnel`;
   
  constructor(private httpClient: HttpClient) { }

  
  getPersonnelList(): Observable<Personnel[]>{
    return this.httpClient.get<Personnel[]>(`${this.baseURL}`);
  }

  createPersonnel(personnel: Personnel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, personnel);
  }
  
  updatePersonnel(idPersonnel: number, personnel: Personnel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idPersonnel}`, personnel);
  }

  deletePersonnel(idPersonnel: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idPersonnel}`);
  }
  getPersonnelById(idPersonnel: number): Observable<Personnel>{
    return this.httpClient.get<Personnel>(`${this.baseURL}/${idPersonnel}`);
  }
 // Les actions concernant les salaires
  createPret(pret: Pret): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, pret);
  }
  
  getListPretByIdPersonnel(idPersonnel: number): Observable<Pret[]>{
    return this.httpClient.get<Pret[]>(`${this.baseURL3}/${idPersonnel}`);
  }

}
