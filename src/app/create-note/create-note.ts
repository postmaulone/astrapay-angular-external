import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css',
})
export class CreateNote implements OnInit {
  note: Note = new Note();
  constructor(
    private noteService: NoteService,
    private router: Router
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveNote(){
    this.noteService.createNotes(this.note).subscribe(data => {
      console.log(data)
    }, error => console.log(error))
  }

  goToNoteList(){
    this.router.navigate([`/notes`])
  }

  onSubmit(){
    if (!this.note.title || this.note.title.trim() === "") {
        alert("Title cannot be empty!");
        return;
    }
    console.log(this.note)
    this.saveNote()
    this.goToNoteList()
  }
}
