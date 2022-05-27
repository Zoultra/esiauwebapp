import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../models/classe';


@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private baseURL = "http://localhost:9201/backendesiauapp/v1/classes";
  constructor( private httpClient: HttpClient) { }

  getClasseList(): Observable<Classe[]>{
    return this.httpClient.get<Classe[]>(`${this.baseURL}`);
  }

  createClasse(classe: Classe): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, classe);
  }

  updateClasse(idClasse: number, classe: Classe): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idClasse}`, classe);
  }

  deleteClasse(idClasse: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idClasse}`);
  }

  getClasseById(idClasse: number): Observable<Classe>{
    return this.httpClient.get<Classe>(`${this.baseURL}/${idClasse}`);
  }
}
