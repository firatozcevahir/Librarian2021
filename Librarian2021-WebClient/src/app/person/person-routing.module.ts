
import { IMainRouting } from '@app/matin-routing';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@app/layout/main-layout/main-layout.component';
import { PersonHomeComponent } from './home/person-home.component';
import { EditPersonComponent } from './edit/edit-person.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, // path is 'person' in app-routing.module.ts
    children: [
      {
        path: '',
        component: PersonHomeComponent,
        children: [
          { path: 'add', component: EditPersonComponent },
          { path: 'edit/:id', component: EditPersonComponent }
        ]
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

export const PersonRouting: IMainRouting = {
  routes: RouterModule.forChild(routes),
  components: [
    PersonHomeComponent,
    EditPersonComponent
  ]
};
