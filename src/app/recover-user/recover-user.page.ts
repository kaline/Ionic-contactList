import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-user',
  templateUrl: './recover-user.page.html',
  styleUrls: ['./recover-user.page.scss'],
})
export class RecoverUserPage implements OnInit {
  email: string;

  constructor(public userService: UserService, public location: Location, public loadingController: LoadingController,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  recoverPassword(){
    this.userService.recoverPasswordUser(this.email);
    this.presentLoading();
    this.alert();
  }
  myBackButton(){
    this.location.back();
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

  async alert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Olá',
      subHeader: 'Email enviao!',
      message: 'Verifique email!',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
