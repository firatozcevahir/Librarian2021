
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { TimeAgoPipe } from './pipes/index';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { DialogWidgetComponent } from './components/dialog-widget/dialog-widget.component';


@NgModule({
  declarations: [
    TimeAgoPipe,
    TooltipComponent,
    DialogWidgetComponent
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
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipComponent,
    DialogWidgetComponent
  ],
  providers: []
})
export class SharedModule { }
