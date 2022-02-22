import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.page.html',
  styleUrls: ['./list-address.page.scss'],
})
export class ListAddressPage implements OnInit {
  addresses = [];

  constructor(public location:  Location, public userService: UserService) {
    this.userService.listAddresses().subscribe(addressesData => {
      console.log(addressesData);
      this.addresses = addressesData;

    });
  }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
