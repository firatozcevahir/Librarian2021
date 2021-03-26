import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';

import { BookRouting } from './book-routing.module';

@NgModule({
  declarations: [BookRouting.components],
  imports: [
    BookRouting.routes,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class BookModule {
  static forRoot(): ModuleWithProviders<BookModule> {
    return {
      ngModule: BookModule,
      providers: []
    };
  }
}
