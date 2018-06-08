import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Match} from "../../models/Match";
import {TeamMember} from "../../models/TeamMember";
import {Team} from "../../models/Team";

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

  teamsRef: AngularFireList<Team>;
  teams: Observable<any>;

  teamById: Observable<any>;

  constructor(public afd: AngularFireDatabase) {
    this.matchesRef = this.afd.list('/matches');
    this.matches = this.matchesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });


    this.teamMembersRef = this.afd.list('/teammember');
    this.teamMembers = this.teamMembersRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });

    this.teamsRef = this.afd.list('/teams');
    this.teams = this.teamsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  getTeamMembers(key) {
    this.teamMembersRef = this.afd.list('/teammember', ref => ref.orderByChild("teamId").equalTo(key));
    this.teamMembers = this.teamMembersRef.snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });

    return this.teamMembers;
  }

  addTeamMember(member: TeamMember) {
    return this.teamMembersRef.push(member);
  }

  updateTeamMember(key, member: TeamMember) {
    return this.teamMembersRef.update(key, member);
  }

  deleteTeamMember(key) {
    return this.teamMembersRef.remove(key);
  }

  getMatches() {
    return this.afd.list("matches").snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      }).map(matches => {
        matches.forEach(match => {
          this.afd.object('/teams/' + match.team1).snapshotChanges()
            .map(change => {
              return {key: change.payload.key, ...change.payload.val()};
            }).subscribe(value => {
            match.team1_name = value.name;
          });

          this.afd.object('/teams/' + match.team2).snapshotChanges()
            .map(change => {
              return {key: change.payload.key, ...change.payload.val()};
            }).subscribe(value => {
            match.team2_name = value.name;
          });
          return match;
        });
        return matches;
      });
  }

  addMatch(match: Match) {
    return this.matchesRef.push(match);
  }

  updateMatch(key, match) {
    return this.matchesRef.update(key, match);
  }

  addTeam(team: Team) {
    return this.teamsRef.push(team);
  }

  getTeams() {
    return this.teams;
  }

  getTeamsWithScore() {
    return this.afd.list("teams").snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      }).map(teams => {
        teams.forEach(team => {
          team.winSet = 0;
          team.lostSet = 0;
          return this.afd.list("matches").snapshotChanges()
            .map(changes => {
              return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
            }).subscribe(matches => {
              matches.forEach(match => {
                if (match.team1 == team.key || match.team2 == team.key) {
                  match.singleGames.forEach(singleGame => {
                    if (singleGame.teamId == team.key) {
                      team.winSet += +singleGame.score;
                    } else {
                      team.lostSet += +singleGame.score;
                    }
                  });
                  match.duoGames.forEach(duoGame => {
                    if (duoGame.teamId == team.key) {
                      team.winSet += +duoGame.score;
                    } else {
                      team.lostSet += +duoGame.score;
                    }
                  });
                }
                return match;
              });
              teams = teams.sort((a, b) => {
                return a.winSet < b.winSet ? 1 : -1;
              });
              return matches;
            });
        });
        return teams;
      });
  }

  getTeamByKey(key) {
    this.teamById = this.afd.object('/teams/' + key).snapshotChanges().map(changes => {
      return {key: changes.payload.key, ...changes.payload.val()};
    });
    return this.teamById;
  }
}
