import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NoteList } from './note-list/note-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, NoteList,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('astrapay-angular');
}
