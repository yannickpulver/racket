import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DatePicker} from "@ionic-native/date-picker";
import {FirebaseServiceProvider} from "../../providers/firebase-service/firebase-service";

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
  match: {
    team1: String,
    team2: String,
    description: String,
    date: Date
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, public firebaseService: FirebaseServiceProvider) {
    this.match = {
      team1: "",
      team2: "",
      description: "",
      date: null
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMatchPage');
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.match.date = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  addItem() {
    this.firebaseService.addMatch(this.match).then(() => {
      this.navCtrl.pop();
    });
  }
}
