import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {App} from 'ionic-angular';
import {Match, MatchIntern} from "../../models/Match";
import {Observable} from "rxjs/Observable";
/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  matches: Observable<MatchIntern[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, private app: App) {
    this.matches = this.firebaseService.getMatches();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

}
