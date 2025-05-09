import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depense } from '../models/depense';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private baseURL = `${environment.apiUrl}/depense`;
  
  
  constructor(private httpClient: HttpClient) { }

  
  getDepenseList(): Observable<Depense[]>{
    return this.httpClient.get<Depense[]>(`${this.baseURL}`);
  }

  createDepense(depense: Depense): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, depense);
  }
  
  updateDepense(idDepense: number, depense: Depense): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idDepense}`, depense);
  }

  deleteDepense(idDepense: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idDepense}`);
  }
  getDepenseById(idDepense: number): Observable<Depense>{
    return this.httpClient.get<Depense>(`${this.baseURL}/${idDepense}`);
  }
}
