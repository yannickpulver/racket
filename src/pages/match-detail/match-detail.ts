import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MatchDetailScorePage} from "../match-detail-score/match-detail-score";
import {MatchDetailFormationPage} from "../match-detail-formation/match-detail-formation";
import {Match, MatchIntern} from "../../models/Match";

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
  match: MatchIntern;

  tab1Root = MatchDetailFormationPage;
  tab2Root = MatchDetailScorePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDetailPage');
  }

}
