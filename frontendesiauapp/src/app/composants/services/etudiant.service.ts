import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseURL = `${environment.apiUrl}/etudiants`;
   
  constructor( private httpClient: HttpClient) { }

  
  getEtudiantList(): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(`${this.baseURL}`);
  }
  createEtudiant(etudiant: Etudiant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, etudiant);
  }
  getEtudiantById(idEtudiant: number): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(`${this.baseURL}/${idEtudiant}`);
  }
  
  updateEtudiant(idEtudiant: number, etudiant: Etudiant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idEtudiant}`, etudiant);
  }
  
  deleteEtudiant(idEtudiant: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idEtudiant}`);
  }
}
