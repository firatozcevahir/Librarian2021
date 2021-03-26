

import { IMainRouting } from '@app/matin-routing';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { AuthorHomeComponent } from './home/author-home.component';
import { EditAuthorComponent } from './edit/edit-author.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, // path is 'author' in app-routing.module.ts
    children: [
      {
        path: '',
        component: AuthorHomeComponent,
        children: [
          { path: 'add', component: EditAuthorComponent },
          { path: 'edit/:id', component: EditAuthorComponent }
        ]
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

export const AuthorRouting: IMainRouting = {
  routes: RouterModule.forChild(routes),
  components: [
    AuthorHomeComponent,
    EditAuthorComponent
  ]
};
