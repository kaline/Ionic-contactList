import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';

declare let google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map;

  constructor(
     public location: Location, public userService: UserService) { }

  ngOnInit() {
    this.initMap();

  }

  initMap() {
    console.log(this.mapElement);
      this.map = this.createMap(this.mapElement);
  }

  createMap(mapElement){
    if(mapElement !== null && mapElement.nativeElement !== null && google) {
      const options = {
        zoom: 7,
        center: {lat: -5.081357184675141, lng: -39.70482921223503}
      };
      return new google.maps.Map(mapElement.nativeElement, options);
    }
    return undefined;
  }


  myBackButton(){
      this.location.back();
  }

}
