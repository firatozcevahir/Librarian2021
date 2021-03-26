import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';

import { AuthorRouting } from './author-routing.module';

@NgModule({
  declarations: [AuthorRouting.components],
  imports: [
    AuthorRouting.routes,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthorModule {
  static forRoot(): ModuleWithProviders<AuthorModule> {
    return {
      ngModule: AuthorModule,
      providers: []
    };
  }
}
