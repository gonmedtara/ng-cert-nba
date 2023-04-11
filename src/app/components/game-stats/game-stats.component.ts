import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Conference, Division, Team } from '../../models';
import { NbaService } from '../../services/nba.service';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css']
})
export class GameStatsComponent {

  teams$: Observable<Team[]>;
  allTeams: Team[] = [];

  selectedConference: string;
  selectedDivision: string;


  conferences: Conference[];
  divisions: Division[];
  constructor(protected nbaService: NbaService) {
    this.teams$ = nbaService.getAllTeams().pipe(
      tap(data => this.allTeams = data)
    );
    this.selectedConference = '';
    this.selectedDivision = '';

    this.conferences = nbaService.getConferences();
    this.divisions = nbaService.getDivisions();

  }

  trackTeam(teamId: string): void {
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team && team.id !== 0)
      this.nbaService.addTrackedTeam(team);
  }

  trackByFn(index: number): number {
    return index;
  }

  handleConfSelect(confValue: string): void {
    this.selectedConference = confValue;
    this.selectedDivision = '';
  }




}
