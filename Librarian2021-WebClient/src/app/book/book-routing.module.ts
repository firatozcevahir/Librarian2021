
import { IMainRouting } from '@app/matin-routing';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { BookHomeComponent } from './home/book-home.component';
import { EditBookComponent } from './edit/edit-book.component';
import { EditBookHolderComponent } from './edit-holder/edit-book-holder.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, // path is 'book' in app-routing.module.ts
    children: [
      {
        path: '',
        component: BookHomeComponent,
        // children: [
        //   { path: 'add', component: EditBookComponent },
        //   { path: 'edit/:id', component: EditBookComponent }
        // ]
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

export const BookRouting: IMainRouting = {
  routes: RouterModule.forChild(routes),
  components: [
    BookHomeComponent,
    EditBookComponent,
    EditBookHolderComponent
  ]
};
