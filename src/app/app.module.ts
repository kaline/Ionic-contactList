import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule }  from 'angularfire2';
import { AngularFirestoreModule }  from 'angularfire2/firestore';
import { AngularFireDatabaseModule }  from 'angularfire2/database';
import { AngularFireAuthModule }  from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage-angular';


const firebaseConfig = {
      apiKey: 'AIzaSyA-GtIsK_u4DNXs9-rEXkg72pG65xkosJk',
      authDomain: 'cepapp-a38f6.firebaseapp.com',
      projectId: 'cepapp-a38f6',
      storageBucket: 'cepapp-a38f6.appspot.com',
      messagingSenderId: '126834635980',
      appId: '1:126834635980:web:f1036ccd63df6413583e69',
      measurementId: 'G-XYSJSG2YYS',
      databaseURL: 'https://cepapp-a38f6-default-rtdb.firebaseio.com/'

};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()

  ],
  providers: [{ provide: RouteReuseStrategy,  useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
