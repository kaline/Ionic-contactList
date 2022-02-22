import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  password: string;
  email: string;
  password1: string;

  constructor(public userSave: UserService, public alertController: AlertController,
    public navCtrl: NavController, public location: Location) { }

  ngOnInit() {
  }

  register(){
    console.log(this.name + ' - ' + this.email + ' - ' + this.password);

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      password1: this.password1

    };
     this.userSave.saveUserAuth(user)
     .then(async () => {


      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Novo usuário',
        subHeader: 'cadastro efetuado',
        message: 'Dados inseridos com sucesso!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Ok',
            id: 'confirm-button',
            handler: () => {
              console.log('Confirm Okay');
              this.navCtrl.pop();
            }
          }
        ]
      });

      await alert.present();

     }).catch(async error =>{
       console.log(error);

       const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: 'Message',
        message: error,
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);


     });

  }
  clear(){
    this.name='';
    this.email='';
    this.password='';
    this.password1='';

  }

  myBackButton(){
      this.location.back();

  }

}
