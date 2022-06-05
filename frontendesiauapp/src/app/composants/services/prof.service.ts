import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professeur } from '../models/prof';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private baseURL = "http://localhost:9201/backendesiauapp/v1/professeur";
  constructor(private httpClient: HttpClient) { }

  
  getProfesseurList(): Observable<Professeur[]>{
    return this.httpClient.get<Professeur[]>(`${this.baseURL}`);
  }

  createProfesseur(professeur: Professeur): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, professeur);
  }
  
  updateProfesseur(idProf: number, professeur: Professeur): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idProf}`, professeur);
  }

  deleteProfesseur(idProf: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idProf}`);
  }
  getProfesseurById(idProf: number): Observable<Professeur>{
    return this.httpClient.get<Professeur>(`${this.baseURL}/${idProf}`);
  }
}
