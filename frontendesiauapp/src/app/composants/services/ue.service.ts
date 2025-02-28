import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UE } from '../models/ue';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UeService {
  private baseURL = `${environment.apiUrl}/ue`;
  constructor(private httpClient: HttpClient) { }

  getUeList(): Observable<UE[]>{
    return this.httpClient.get<UE[]>(`${this.baseURL}`);
  }

  createUe(ue: UE): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, ue);
  }
  
  updateUe(idUe: number, ue: UE): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idUe}`, ue);
  }

  deleteUe(idUe: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idUe}`);
  }
  getUeById(idUe: number): Observable<UE>{
    return this.httpClient.get<UE>(`${this.baseURL}/${idUe}`);
  }
}
