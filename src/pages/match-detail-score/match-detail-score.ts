import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Match} from "../../models/Match";

/**
 * Generated class for the MatchDetailScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-match-detail-score',
  templateUrl: 'match-detail-score.html',
})
export class MatchDetailScorePage {
  match: Match;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDetailScorePage');
  }

}
