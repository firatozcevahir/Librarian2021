import { Component, EventEmitter, Input, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent implements OnInit {

  @Input() msg: string = '';
  @Input() position: TooltipPosition = 'above';
  @Input() icon = 'help';

  @Output() onTooltipClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }



  public tooltipClick(): void {
    this.onTooltipClick.emit();
  }

}
