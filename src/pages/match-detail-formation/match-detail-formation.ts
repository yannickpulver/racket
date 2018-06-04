import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Match} from "../../models/Match";

/**
 * Generated class for the MatchDetailFormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-match-detail-formation',
  templateUrl: 'match-detail-formation.html',
})
export class MatchDetailFormationPage {
  match: Match;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDetailFormationPage');
  }

}
