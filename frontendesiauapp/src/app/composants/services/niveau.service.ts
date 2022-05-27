import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Niveau } from '../models/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  findAll() {
    throw new Error('Method not implemented.');
  }

   private baseURL = "http://localhost:9201/backendesiauapp/v1/niveaux";
  constructor( private httpClient: HttpClient) { }

  getNiveauList(): Observable<Niveau[]>{
    return this.httpClient.get<Niveau[]>(`${this.baseURL}`);
  }

  createNiveau(niveau: Niveau): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, niveau);
  }
  
  updateNiveau(idNiveau: number, niveau: Niveau): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idNiveau}`, niveau);
  }

  deleteNiveau(idNiveau: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idNiveau}`);
  }
  getNiveauById(idNiveau: number): Observable<Niveau>{
    return this.httpClient.get<Niveau>(`${this.baseURL}/${idNiveau}`);
  }
}
