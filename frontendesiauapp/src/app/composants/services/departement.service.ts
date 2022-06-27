import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseURL = "http://localhost:9201/backendesiauapp/v1/departement";
  constructor( private httpClient: HttpClient) { }

  
  getDepartements(): Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(`${this.baseURL}`);
  }
  createDepartement(departemt: Departement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, departemt);
  }
  getDepartementById(idDepartement: number): Observable<Departement>{
    return this.httpClient.get<Departement>(`${this.baseURL}/${idDepartement}`);
  }

  updateDepartement(idDepartement: number, departement: Departement): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idDepartement}`, departement);
  }
  
  deleteDepartemnt(idEtudiant: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idEtudiant}`);
  }
}
