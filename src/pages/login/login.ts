import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Observable} from "rxjs/Observable";
import {SingletonProvider} from "../../providers/singleton/singleton";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {Team} from "../../models/Team";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  teamId: string;
  teams: Observable<Team[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonProvider, public firebaseService: FirebaseServiceProvider) {
    this.teams = this.firebaseService.getTeams();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openView() {
    if (this.teamId == null) return;
    this.singleton.teamId = this.teamId;
    this.navCtrl.push(TabsPage);
  }

}
