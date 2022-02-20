import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public angularFData: AngularFireDatabase) { }

  saveAddress(address){
    this.angularFData.list('address').push(address);
  }
}
