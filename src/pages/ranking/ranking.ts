import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {App} from 'ionic-angular';
import {Match, MatchIntern} from "../../models/Match";
import {Observable} from "rxjs/Observable";
import {Team} from "../../models/Team";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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

  number: number = 0;

  matches: Observable<any[]>;
  teams: Observable<MatchIntern[]>;

  ranking = [];
  test = [];

  nameTeam: String;

  singlegames = [];

  rankingSorted = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, private app: App) {
    //this.matches = this.firebaseService.getMatchesWithScore();
    this.teams = this.firebaseService.getMatchesWithScore();

    //console.log(this.matches);
    console.log(this.teams);

    this.teams.forEach(d => console.log(d));

    //this.matches.forEach(d => console.log(d));
    //this.getScore("Baden");
    //this.rankingSorted = this.ranking.sort(item => item.score);
    //this.rankingSorted = this.ranking.filter(a => a.score == 6);

    //console.log(this.rankingSorted)
    //this.teams.forEach( item => item.forEach(d => console.log(d.name)));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

}
