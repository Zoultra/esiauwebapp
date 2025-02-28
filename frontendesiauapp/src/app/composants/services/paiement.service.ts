import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from '../models/paiement';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  
  private baseURL = `${environment.apiUrl}/paiement`;
  private baseURL2 = `${environment.apiUrl}/paiement/etudiant`;
  
  

  constructor( private httpClient: HttpClient) { }

  
  getPaiementList(): Observable<Paiement[]>{
    return this.httpClient.get<Paiement[]>(`${this.baseURL}`);
  }

  createPaiement(paiement: Paiement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, paiement);
  }
  
  updatePaiement(idPaiement: number, paiement: Paiement): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idPaiement}`, paiement);
  }

  deletePaiement(idPaiement: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idPaiement}`);
  }
  getPaiementById(idPaiement: number): Observable<Paiement[]>{
    return this.httpClient.get<Paiement[]>(`${this.baseURL}/${idPaiement}`);
  }
  getPaiementListByEtudiant(idEtudiant: number): Observable<Paiement[]>{
    return this.httpClient.get<Paiement[]>(`${this.baseURL2}/${idEtudiant}`);
  }
}
