import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professeur } from '../models/prof';
import { Observable } from 'rxjs';
import { ProfesseurMatiere } from '../models/prof-matiere';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private baseURL = "http://localhost:9201/backendesiauapp/v1/professeur";
  private baseURL2 = "http://localhost:9201/backendesiauapp/v1/professeur/addmatiere";
  private baseURL3 = "http://localhost:9201/backendesiauapp/v1/professeur/matiere";
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

  createMatiereProf(professeurMatiere: ProfesseurMatiere): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, professeurMatiere);
  }
  findMatiereForProf(idProf: number): Observable<ProfesseurMatiere[]>{
    return this.httpClient.get<ProfesseurMatiere[]>(`${this.baseURL3}/${idProf}`);
  }
}
