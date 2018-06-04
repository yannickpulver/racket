import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddTeamMemberPage} from "../add-team-member/add-team-member";
import {PastMatchesPage} from "../past-matches/past-matches";
import {UpcomingMatchesPage} from "../upcoming-matches/upcoming-matches";
import {MatchDetailScorePage} from "../match-detail-score/match-detail-score";
import {MatchDetailFormationPage} from "../match-detail-formation/match-detail-formation";

/**
 * Generated class for the MatchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html',
})
export class MatchDetailPage {
  match: {
    team1: String,
    team2: String,
    description: String,
    date: Date
  };
  tab1Root = MatchDetailScorePage;
  tab2Root = MatchDetailFormationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDetailPage');
  }

}
