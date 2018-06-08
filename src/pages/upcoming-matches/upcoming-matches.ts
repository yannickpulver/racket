import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {MatchDetailPage} from "../match-detail/match-detail";
import {App} from 'ionic-angular';
import {Match, MatchIntern} from "../../models/Match";
import {Team} from "../../models/Team";
import {SingletonProvider} from "../../providers/singleton/singleton";


/**
 * Generated class for the UpcomingMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upcoming-matches',
  templateUrl: 'upcoming-matches.html',
})
export class UpcomingMatchesPage {
  matches: Observable<MatchIntern[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, private app: App, public singleton: SingletonProvider) {
    this.matches = this.firebaseService.getMatches();
  }


  isInFuture(date) {
    return new Date(date) > new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingMatchesPage');
  }

  navigateToMatch(match) {
    this.app.getRootNav().push(MatchDetailPage, match);
  }

  // getTeamByKey(key) {
  //   console.log(this.firebaseService.getTeamByKey(key));
  //   return this.firebaseService.getTeamByKey(key);
  // }

}
