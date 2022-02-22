import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cep='';
  private history: string[] = [];
  constructor(public cepProvider: CepService, public userAddress: UserService, public location: Location, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
   }

  ngOnInit() {

  }

  searchCEP(){
    console.log(this.cep);
    return this.cepProvider.searchAddressforCEP(this.cep).subscribe((address) => {
      console.log(address);
       return this.userAddress.saveAddress(address);

    });
  }

  myBackButton(){
    this.history.pop();
    if (this.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
