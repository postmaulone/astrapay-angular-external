import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Note } from "./note";

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    private baseUrl = "http://localhost:8000/notes/"
    constructor(private httpClient: HttpClient){}
    
    getNotes(): Observable<Note[]>{
        return this.httpClient.get<Note[]>(`${this.baseUrl}`);
    }

    createNotes(note: Note): Observable<Object>{
        return this.httpClient.post(`${this.baseUrl+"create"}`, note);
    }

    // updateNote(id: number): Observable<Object> {
    //     return this.httpClient.put(`${this.baseUrl}${id}`)
    // }

    deleteNote(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseUrl}${id}`)
    }
}