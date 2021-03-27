import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-widget',
  templateUrl: './dialog-widget.component.html',
  styleUrls: ['./dialog-widget.component.scss']
})
export class DialogWidgetComponent implements OnInit {

  @Input() public title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
