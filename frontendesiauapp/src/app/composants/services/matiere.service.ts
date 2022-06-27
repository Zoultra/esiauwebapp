import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private baseURL = "http://localhost:9201/backendesiauapp/v1/matiere";
  constructor(private httpClient: HttpClient) { }

  
  getMatiereList(): Observable<Matiere[]>{
    return this.httpClient.get<Matiere[]>(`${this.baseURL}`);
  }

  createMatiere(matiere: Matiere): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  
  updateMatiere(idMatiere: number, matiere: Matiere): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idMatiere}`, matiere);
  }

  deleteMatiere(idMatiere: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idMatiere}`);
  }
  getMatiereById(idMatiere: number): Observable<Matiere>{
    return this.httpClient.get<Matiere>(`${this.baseURL}/${idMatiere}`);
  }
}
