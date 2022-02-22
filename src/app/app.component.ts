import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Usuários', url: '/list', icon: 'person' },
    { title: 'Endereços', url: '/list-address', icon: 'location' },

  ];
  public labels = ['Work'];
  constructor(public storage: Storage, public navCtrl: NavController) {
    this.initializeApp();
  }
  initializeApp() {
    this.storage.create();
    this.storage.get('user').then(user => {
      console.log('APP -- '+ user);

      if(user && user.length > 0) {
        this.navCtrl.navigateForward('/home');

      }else{
        this.navCtrl.navigateForward('/login');
      }
    });
  }


}
