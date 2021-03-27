import { ModuleWithProviders, NgModule } from '@angular/core';

import { BookRouting } from './book-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [BookRouting.components],
  imports: [
    BookRouting.routes,
    SharedModule
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
