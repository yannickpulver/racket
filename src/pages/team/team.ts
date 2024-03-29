import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {SingletonProvider} from "../../providers/singleton/singleton";
import {AddTeamMemberPage} from "../add-team-member/add-team-member";
import {TeamMember} from "../../models/TeamMember";
import {Team} from "../../models/Team";

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  teamName = "";
  teamMembers: Observable<TeamMember>;
  team: Observable<Team>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider, public singleton: SingletonProvider) {
    this.teamMembers = this.firebaseService.getTeamMembers(this.singleton.teamId);
    this.team = this.firebaseService.getTeamByKey(this.singleton.teamId);

    this.team.forEach(value => this.teamName = value.name);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }

  addItem() {
    this.navCtrl.push(AddTeamMemberPage, {});
  }

  editItem(item) {
    this.navCtrl.push(AddTeamMemberPage, {
      key: item.key,
      teamMember: item
    });
  }

  removeItem(key) {
    this.firebaseService.deleteTeamMember(key);
  }

}
