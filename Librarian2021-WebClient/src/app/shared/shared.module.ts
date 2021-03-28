
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { TimeAgoPipe, GlobalEnumPipe } from './pipes/index';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { DialogWidgetComponent } from './components/dialog-widget/dialog-widget.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    TimeAgoPipe,
    GlobalEnumPipe,
    TooltipComponent,
    DialogWidgetComponent,
    SearchBarComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatIconModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TimeAgoPipe,
    GlobalEnumPipe,
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipComponent,
    DialogWidgetComponent,
    SearchBarComponent
  ],
  providers: []
})
export class SharedModule { }
