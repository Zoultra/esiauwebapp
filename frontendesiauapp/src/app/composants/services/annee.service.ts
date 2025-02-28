import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annee } from '../models/annee';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {
  private baseURL = "http://localhost:9201/backendesiauapp/v1/annee";
  constructor(private httpClient: HttpClient) { }

  
  getAnneeList(): Observable<Annee[]>{
    return this.httpClient.get<Annee[]>(`${this.baseURL}`);
  }

  createAnnee(annee: Annee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, annee);
  }
  
  updateMatiere(idAnnee: number, annee: Annee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idAnnee}`, annee);
  }

  deleteAnnee(idAnnee: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idAnnee}`);
  }
  getAnneeById(idAnnee: number): Observable<Annee>{
    return this.httpClient.get<Annee>(`${this.baseURL}/${idAnnee}`);
  }
}
