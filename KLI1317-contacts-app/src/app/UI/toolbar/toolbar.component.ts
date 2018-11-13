import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick = new EventEmitter<any>();

  constructor() {
    this.menuClick = new  EventEmitter<any>();
  }

  ngOnInit() {
  }

  onMenuClick()
  {
    console.log("WMeny clicked");
    this.menuClick.emit();
  }

}
