import { ModuleWithProviders, NgModule } from '@angular/core';

import { AuthorRouting } from './author-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [AuthorRouting.components],
  imports: [
    AuthorRouting.routes,
    SharedModule
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
