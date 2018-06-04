import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {MatchDetailPage} from "../match-detail/match-detail";
import {App} from 'ionic-angular';
import {Match} from "../../models/Match";


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
  matches: Observable<Match>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, private app: App) {
    this.matches = this.firebaseService.getMatches();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingMatchesPage');
  }

  navigateToMatch(match) {
   this.app.getRootNav().push(MatchDetailPage, match);
  }

}
