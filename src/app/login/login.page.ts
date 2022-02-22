import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(public navCtrl: NavController, public userService: UserService) { }

  ngOnInit() {
  }
  enter(){
    this.email;
    this.password;
    this.userService.login(this.email, this.password).then(user => {
      console.log('user', user);

    }).catch(error => {
      console.log(error);
    });
  }
  register(){
    this.navCtrl.navigateForward('/register');

  }
  recoverPassword(){
    this.navCtrl.navigateForward('/recover-user');
  }

}
