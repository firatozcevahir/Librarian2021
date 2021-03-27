
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { PersonRouting } from './person-routing.module';

@NgModule({
  declarations: [PersonRouting.components],
  imports: [
    PersonRouting.routes,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedModule

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
