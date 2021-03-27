import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'book', loadChildren: () => import('@app/book/book.module').then((m) => m.BookModule)
  },
  {
    path: 'author', loadChildren: () => import('@app/author/author.module').then((m) => m.AuthorModule)
  },
  {
    path: 'person', loadChildren: () => import('@app/person/person.module').then((m) => m.PersonModule)
  },
  { path: '**', redirectTo: 'book' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
