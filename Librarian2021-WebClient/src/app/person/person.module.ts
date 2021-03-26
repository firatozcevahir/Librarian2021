
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';

import { PersonRouting } from './person-routing.module';

@NgModule({
  declarations: [PersonRouting.components],
  imports: [
    PersonRouting.routes,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class PersonModule {
  static forRoot(): ModuleWithProviders<PersonModule> {
    return {
      ngModule: PersonModule,
      providers: []
    };
  }
}
