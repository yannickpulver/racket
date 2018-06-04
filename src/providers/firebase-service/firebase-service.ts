import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Match} from "../../models/Match";
import {TeamMember} from "../../models/TeamMember";

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  matchesRef: AngularFireList<Match>;
  matches: Observable<any>;

  teamMembersRef: AngularFireList<TeamMember>;
  teamMembers: Observable<any>;

  constructor(public afd: AngularFireDatabase) {
    this.matchesRef = this.afd.list('/matches');
    this.matches = this.matchesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });

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

  getMatches() {
    return this.matches;
  }

  addMatch(match) {
    return this.matchesRef.push(match);
  }
}
