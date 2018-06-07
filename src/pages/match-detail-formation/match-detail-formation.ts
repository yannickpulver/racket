import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Match, MatchIntern} from "../../models/Match";
import {SingleGame} from "../../models/SingleGame";
import {SingletonProvider} from "../../providers/singleton/singleton";
import {TeamMember} from "../../models/TeamMember";
import {Observable} from "rxjs/Observable";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";

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
  match: MatchIntern;
  isTeam1: boolean;
  filterargs = {teamId: this.singleton.teamId};
  teamMembers: Observable<TeamMember[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonProvider, public firebaseService: FirebaseServiceProvider) {
    this.teamMembers = this.firebaseService.getTeamMembers(this.singleton.teamId);
    this.teamMembers.subscribe(value => {
      console.log(value);
    });
    this.match = this.navParams.data;
    this.isTeam1 = this.singleton.teamId == this.match.team1;
    this.filterargs = {teamId: this.singleton.teamId};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchDetailFormationPage');
  }

}
