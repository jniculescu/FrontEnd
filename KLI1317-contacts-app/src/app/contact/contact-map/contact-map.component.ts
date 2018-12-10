import { Component, OnInit } from '@angular/core';
import {ToolbarOptions} from '../../UI/toolbarserv/toolbar-options';
import {ToolbarService} from '../../UI/toolbarserv/toolbar.service';
import {ActivatedRoute} from '@angular/router';

class ActivateRoute {
}

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.css']
})
export class ContactMapComponent implements OnInit {

  address: string;
  city: string;
  mapUrl: string;

  constructor(private toolbar: ToolbarService, private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Map'));
   this.address = this.route.snapshot.paramMap.get('address');
    this.city = this.route.snapshot.paramMap.get('city');
    console.log('ContactMapComponent');
    console.log(this.address + ' ' + this.city);
    this.createMapUrl();
  }

  createMapUrl()
  {
    const googleMapsUrlBase = 'https://www.google.com/maps?q=';
    const googleMapsUrlParams = '&output=embed';
    this.mapUrl = googleMapsUrlBase + this.address + this.city + googleMapsUrlParams;
    console.log(this.mapUrl);
  }

}
