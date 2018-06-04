import {Component} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {MatchDetailPage} from "../match-detail/match-detail";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {Observable} from "rxjs/Observable";
import {Match} from "../../models/Match";

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
  matches: Observable<Match>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, private app: App) {
    this.matches = this.firebaseService.getMatches();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastMatchesPage');
  }

  navigateToMatch(match) {
    this.app.getRootNav().push(MatchDetailPage, match);
  }

}
