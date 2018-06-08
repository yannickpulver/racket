import {Component} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {MatchDetailPage} from "../match-detail/match-detail";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {Observable} from "rxjs/Observable";
import {Match, MatchIntern} from "../../models/Match";
import {SingletonProvider} from "../../providers/singleton/singleton";

/**
 * Generated class for the PastMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-past-matches',
  templateUrl: 'past-matches.html',
})
export class PastMatchesPage {
  matches: Observable<MatchIntern[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, public singleton: SingletonProvider, private app: App) {
    this.matches = this.firebaseService.getMatches();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastMatchesPage');
  }

  isInPast(date) {
    return new Date(date) < new Date();
  }

  navigateToMatch(match) {
    this.app.getRootNav().push(MatchDetailPage, match);
  }

}
