import { Routes } from '@angular/router';
import { NoteList } from './note-list/note-list';
import { CreateNote } from './create-note/create-note';

export const routes: Routes = [
    { path: 'notes', component: NoteList },
    { path: 'create-note', component: CreateNote },
    { path: '', redirectTo: 'notes', pathMatch: 'full' },
];
