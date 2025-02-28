import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL = `${environment.apiUrl}/note`;
  private baseURL2 = `${environment.apiUrl}/note/etudiant`;

  
  constructor(private httpClient : HttpClient) { }

  
  createNote(note: Note): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, note);
  }
  
  updateNote(idNote: number, note: Note): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idNote}`, note);
  }

  deleteNote(idNote: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idNote}`);
  }

  
  getNoteListByEtudiant(idEtudiant: number): Observable<Note[]>{
    return this.httpClient.get<Note[]>(`${this.baseURL2}/${idEtudiant}`);
  }
}
