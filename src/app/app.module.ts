import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MatchPage} from "../pages/match/match";
import {RankingPage} from "../pages/ranking/ranking";
import {TeamPage} from "../pages/team/team";
import {LoginPage} from "../pages/login/login";
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
  apiKey: "AIzaSyA4r535VHKNdUs6Kd-gdD4sWnJ8qskTq04",
  authDomain: "racket-b7013.firebaseapp.com",
  databaseURL: "https://racket-b7013.firebaseio.com",
  projectId: "racket-b7013",
  storageBucket: "racket-b7013.appspot.com",
  messagingSenderId: "127609660647"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MatchPage,
    RankingPage,
    TeamPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MatchPage,
    RankingPage,
    TeamPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
