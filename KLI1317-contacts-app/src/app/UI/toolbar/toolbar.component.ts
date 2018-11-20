import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarOptions} from '../toolbarserv/toolbar-options';
import {ToolbarActions} from '../toolbarserv/toolbar-actions';
import {ToolbarService} from '../toolbarserv/toolbar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick = new EventEmitter<any>();
  options: ToolbarOptions;
  mainAction: ToolbarActions;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.menuClick = new  EventEmitter<any>();
    this.options = new ToolbarOptions('menu', 'Contacts Application');
    this.mainAction = new ToolbarActions(this.onMenuClick.bind(this), 'menu');
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe(options => {
      this.options = options;
      console.log('Toolbar: options set');
      console.log(JSON.stringify(this.options));
      if(this.options.mode === 'menu')
      {
        this.mainAction = new ToolbarActions(this.onMenuClick.bind(this), 'menu');
      }
      else if (this.options.mode === 'back')
      {
        this.mainAction = new ToolbarActions(this.onNavigateBack.bind(this), 'arrow_back');
      }
    });
  }

  onMenuClick()
  {
    console.log("Meny clicked");
    this.menuClick.emit();
  }

  onNavigateBack(){
    console.log('Went back');
    this.location.back();
  }

}
