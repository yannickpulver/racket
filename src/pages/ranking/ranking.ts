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

  matches: Observable<MatchIntern[]>;
  teams: Observable<Team[]>;

  ranking = [];
  test = [];

  rankingSorted = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, private app: App, public loadingCtrl: LoadingController) {
    this.matches = this.firebaseService.getMatches();

    this.teams = this.firebaseService.getTeams();

    this.teams.forEach(item => item.forEach( d => {
      return this.ranking.push(new Object({
        name: d.name,
        score: this.getScore(d.name),
        winSet: 4,
        lostSet: 3,
        rank: 3
      }));
    }));

    //this.rankingSorted = this.ranking.sort(item => item.score);
    //this.rankingSorted = this.ranking.filter(a => a.score == 6);

    //console.log(this.rankingSorted)
    //this.teams.forEach( item => item.forEach(d => console.log(d.name)));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  getScore(team){
    console.log(this.matches);

   this.matches.subscribe(value => console.log(value));

    if(team == "Zürich") return 6;
    return 3;
  }

  countUp(){
    this.number = this.number + 1;
    return this.number;
  }
}
