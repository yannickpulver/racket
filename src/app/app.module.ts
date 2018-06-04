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
import {PastMatchesPage} from "../pages/past-matches/past-matches";
import {UpcomingMatchesPage} from "../pages/upcoming-matches/upcoming-matches";
import { SingletonProvider } from '../providers/singleton/singleton';
import {AddTeamMemberPage} from "../pages/add-team-member/add-team-member";
import {AddMatchPage} from "../pages/add-match/add-match";
import {DatePicker} from "@ionic-native/date-picker";
import {MatchDetailPage} from "../pages/match-detail/match-detail";
import {MatchDetailScorePage} from "../pages/match-detail-score/match-detail-score";
import {MatchDetailFormationPage} from "../pages/match-detail-formation/match-detail-formation";

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
    LoginPage,
    PastMatchesPage,
    UpcomingMatchesPage,
    AddTeamMemberPage,
    AddMatchPage,
    MatchDetailPage,
    MatchDetailScorePage,
    MatchDetailFormationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MatchPage,
    RankingPage,
    TeamPage,
    TabsPage,
    LoginPage,
    PastMatchesPage,
    UpcomingMatchesPage,
    AddTeamMemberPage,
    AddMatchPage,
    MatchDetailPage,
    MatchDetailScorePage,
    MatchDetailFormationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    SingletonProvider,
    DatePicker
  ]
})
export class AppModule {}
