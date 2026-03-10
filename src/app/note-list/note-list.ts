import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  imports: [ CommonModule ],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.fetchNotes();
  }

  private fetchNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        console.log('Spring Boot sent:', data);
        this.notes = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  deleteNote(id: number){
    this.noteService.deleteNote(id).subscribe( data => {
      console.log("Deleted note with id: "+data)
      this.fetchNotes();
    })
  }
}
