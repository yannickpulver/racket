import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PastMatchesPage} from "../past-matches/past-matches";
import {UpcomingMatchesPage} from "../upcoming-matches/upcoming-matches";
import {AddTeamMemberPage} from "../add-team-member/add-team-member";
import {AddMatchPage} from "../add-match/add-match";
import {Observable} from "rxjs/Observable";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  tab1Root = UpcomingMatchesPage;
  tab2Root = PastMatchesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  addMatch() {
    this.navCtrl.push(AddMatchPage, {});
  }

}
