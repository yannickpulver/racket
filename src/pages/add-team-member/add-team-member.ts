import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {SingletonProvider} from "../../providers/singleton/singleton";

/**
 * Generated class for the AddTeamMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-team-member',
  templateUrl: 'add-team-member.html',
})
export class AddTeamMemberPage {

  key: number = -1;
  teamMember = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider, public singleton: SingletonProvider) {
    console.log(navParams);
    if (this.navParams.get("key") != undefined) {
      this.teamMember = this.navParams.get("teamMember");
      this.key = this.navParams.get("key");
    } else {
      this.teamMember = {
        name: "",
        teamId: this.singleton.teamId,
        classification: ""
      };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTeamMemberPage');
  }

  addItem() {
    if (this.key != -1) {
      this.editItem();
      return;
    }

    this.firebaseService.addTeamMember(this.teamMember).then(() => {
      this.navCtrl.pop();
    });
  }

  editItem() {
    this.firebaseService.updateTeamMember(this.key, this.teamMember).then(() => {
      this.navCtrl.pop();
    });
  }

}