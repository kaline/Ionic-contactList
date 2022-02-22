import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { HomePage } from '../home/home.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(public navCtrl: NavController, public userService: UserService,
    public loadingController: LoadingController, public alertController: AlertController, public storage: Storage) { }

  ngOnInit() {
  }
  enter(){
    this.email;
    this.password;
    this.presentLoading();

    this.userService.login(this.email, this.password).then(user => {
      console.log('user', user);
      this.loadingController.dismiss();
     this.storage.create();
      this.storage.set('user' , user.user.uid).then(data => {
        this.navCtrl.navigateRoot('/home');

      });


    }).catch(error => {
      console.log(error);
      this.errorAlert();
      this.loadingController.dismiss();

    });
  }
  register(){
    this.navCtrl.navigateForward('/register');

  }
  recoverPassword(){
    this.navCtrl.navigateForward('/recover-user');
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro',
      subHeader: 'Não é possível logar',
      message: 'Verifique email e senha!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
