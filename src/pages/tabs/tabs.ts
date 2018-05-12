import {Component} from '@angular/core';

import {MatchPage} from "../match/match";
import {RankingPage} from "../ranking/ranking";
import {TeamPage} from "../team/team";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MatchPage;
  tab2Root = RankingPage;
  tab3Root = TeamPage;

  constructor() {

  }
}
