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
    { title: 'Estudantes', url: '/list-student', icon: 'person' },
    { title: 'Professores', url: '/list-teacher', icon: 'person' },
    { title: 'Cursos', url: '/list-course', icon: 'book' },
    { title: 'Endereços', url: '/list-address', icon: 'location' },
    { title: 'Formulário professor', url: '/list-teacher', icon: 'person' },
    { title: 'Formulário estudante', url: '/form-student', icon: 'person' },
    { title: 'Formulário curso', url: '/list-course', icon: 'book' },
    { title: 'Fromulário de endereços', url: '/form-address', icon: 'location' },
    { title: 'Sair', url: '/login', icon: 'log-out' },
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
