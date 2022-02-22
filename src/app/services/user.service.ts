import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public angularFAddress: AngularFireDatabase, public angularFUser: AngularFireDatabase,
     public angularAuth: AngularFireAuth, public alertController: AlertController, public navCtrl: NavController) { }

  login(email, password){
    return this.angularAuth.auth.signInWithEmailAndPassword(email, password);

  }
  saveAddress(address){
    this.angularFAddress.list('address/').push(address);
  }
  saveUser(user){
    return this.angularFUser.object('/users/' + user.id).update(user);

  }
  saveUserAuth(user1){
   return this.angularAuth.auth.createUserWithEmailAndPassword(user1.email, user1.password)
   .then(async (userAuth) => {
    user1.info = userAuth.additionalUserInfo;
    user1.id = userAuth.user.uid;
    delete user1.password;
    delete user1.password1;

    this.saveUser(user1);

   }).catch(async error =>{
     console.log(error);

   });

  }
}
