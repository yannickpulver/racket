import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DatePicker} from "@ionic-native/date-picker";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";
import {Match} from "../../models/Match";
import {SingleGame} from "../../models/SingleGame";
import {Team} from "../../models/Team";
import {Observable} from "rxjs/Observable";
import {DuoGame} from "../../models/DuoGame";

/**
 * Generated class for the AddMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-match',
  templateUrl: 'add-match.html',
})
export class AddMatchPage {
  match: Match = <Match>{};
  teams: Observable<Team[]>;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, public firebaseService: FirebaseServiceProvider) {
    if (this.navParams.get("key") != undefined) {
      this.match = this.navParams.get("match");
      this.key = this.navParams.get("key");
    }
    this.teams = this.firebaseService.getTeams();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMatchPage');
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => this.match.date = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  addItem() {
    this.match.singleGames = [];
    for (var i = 0; i < 6; i++) {
      var singleGame = <SingleGame>{};
      singleGame.index = i;
      singleGame.teamId = this.match.team1;
      singleGame.score = 0;
      this.match.singleGames.push(singleGame)

      var singleGame2 = <SingleGame>{};
      singleGame2.index = i;
      singleGame2.teamId = this.match.team2;
      singleGame2.score = 0;
      this.match.singleGames.push(singleGame2)
    }


    this.match.duoGames = [];
    for (var i = 0; i < 3; i++) {
      var duoGame = <DuoGame>{};
      duoGame.index = i;
      duoGame.teamId = this.match.team1;
      duoGame.score = 0;
      this.match.duoGames.push(duoGame)

      var duoGame2 = <DuoGame>{};
      duoGame2.index = i;
      duoGame2.teamId = this.match.team2;
      duoGame2.score = 0;
      this.match.duoGames.push(duoGame2)
    }

    this.firebaseService.addMatch(this.match).then(() => {
      this.navCtrl.pop();
    });
  }
}
