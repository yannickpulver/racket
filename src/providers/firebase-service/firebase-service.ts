import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  // itemsRef: AngularFireList<any>;
  // items: Observable<any>;

  teamMembersRef: AngularFireList<any>;
  teamMembers: Observable<any>;

  constructor(public afd: AngularFireDatabase) {
    // this.itemsRef = this.afd.list('/teams');
    // this.items = this.itemsRef.snapshotChanges().map(changes =>{
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    // });

    this.teamMembersRef = this.afd.list('/teammember');
    this.teamMembers = this.teamMembersRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  getTeamMembers() {
    return this.teamMembers;
  }

  addTeamMember(member) {
    return this.teamMembersRef.push(member);
  }

  updateTeamMember(key, member) {
    return this.teamMembersRef.update(key, member);
  }

  deleteTeamMember(key) {
    return this.teamMembersRef.remove(key);
  }

  // //Todo: Define what how the Data is structured
  // addItems(newTeam){
  //   return this.itemsRef.push(newTeam)
  // }


}
