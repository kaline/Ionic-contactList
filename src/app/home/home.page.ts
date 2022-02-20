import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cep='';
  constructor(public cepProvider: CepService, public userAddress: UserService) { }

  ngOnInit() {

  }

  searchCEP(){
    console.log(this.cep);
    return this.cepProvider.searchAddressforCEP(this.cep).subscribe((address) => {
      console.log(address);
       return this.userAddress.saveAddress(address);

    });
  }

}
