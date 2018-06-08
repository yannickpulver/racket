import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Match, MatchIntern} from "../../models/Match";
import {Observable} from "rxjs/Observable";
import {TeamMember} from "../../models/TeamMember";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {SingletonProvider} from "../../providers/singleton/singleton";

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
  match: any;
  isTeam1: boolean;
  filterargs = {teamId: this.singleton.teamId};
  teamMembers: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonProvider, public firebaseService: FirebaseServiceProvider) {
    this.teamMembers = this.firebaseService.getTeamMembers(this.singleton.teamId);
    this.match = this.navParams.data;

    this.teamMembers.subscribe(teammembers => {
      if (teammembers.length == 0) return;

      this.match.singleGames.forEach(game => {
        if (game.player != undefined) {
          var filtered = teammembers.filter(teammember => game.player == teammember.key);
          if (filtered.length > 0) {
            game.player_name = filtered[0].name;
          }
        }
      });

      this.match.duoGames.forEach(game => {
        if (game.player1 != undefined) {
          var filtered = teammembers.filter(teammember => game.player1 == teammember.key);
          if (filtered.length > 0) {
            game.player1_name = filtered[0].name;
          }
        }
        if (game.player2 != undefined) {
          var filtered = teammembers.filter(teammember => game.player2 == teammember.key);
          if (filtered.length > 0) {
            game.player2_name = filtered[0].name;
          }
        }
      });
    });

    this.match.singleGames.forEach(game => {
      if (game.teamId == this.singleton.teamId) {
        game.score2 = this.match.singleGames.filter(value => value.index == game.index && value.teamId != game.teamId)[0].score;
      }
    });

    this.match.duoGames.forEach(game => {
      if (game.teamId == this.singleton.teamId) {
        game.score2 = this.match.duoGames.filter(value => value.index == game.index && value.teamId != game.teamId)[0].score;
      }
    });

    this.isTeam1 = this.singleton.teamId == this.match.team1;
    this.filterargs = {teamId: this.singleton.teamId};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDetailScorePage');
  }

  updateMatch() {
    this.match.singleGames.forEach(game => {
        if (game.teamId == this.singleton.teamId) {
          this.match.singleGames.filter(value => value.index == game.index && value.teamId != game.teamId)[0].score = game.score2;
        }
    });

    this.match.duoGames.forEach(game => {
      if (game.teamId == this.singleton.teamId) {
        this.match.duoGames.filter(value => value.index == game.index && value.teamId != game.teamId)[0].score = game.score2;
      }
    });

    this.firebaseService.updateMatch(this.match.key, this.match);
  }

}
