import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.page.html',
  styleUrls: ['./list-address.page.scss'],
})
export class ListAddressPage implements OnInit {
  addresses = [];
  cep='';


  constructor(public location:  Location, public userService: UserService, public cepProvider: CepService) {
    this.userService.listAddresses().subscribe(addressesData => {
      console.log(addressesData);
      this.addresses = addressesData;

    });
  }

  ngOnInit() {
  }
  searchCEP(){
    console.log(this.cep);
    return this.cepProvider.searchAddressforCEP(this.cep).subscribe((address) => {
      console.log(address);
       return this.userService.showAddress(address);

    });
  }
  saveCEP(){
    console.log(this.cep);
    return this.cepProvider.searchAddressforCEP(this.cep).subscribe((address) => {
      console.log(address);
       return this.userService.saveAddress(address);

    });
  }
  removeCEP(){
    console.log(this.cep);
    return this.cepProvider.searchAddressforCEP(this.cep).subscribe((address) => {
      console.log(address);
       return this.userService.removeAddress(address);

    });
  }


  myBackButton(){
    this.location.back();
  }

}
