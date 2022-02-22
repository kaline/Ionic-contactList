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
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig.dev),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()

  ],
  providers: [{ provide: RouteReuseStrategy,  useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
