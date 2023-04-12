import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Game, Stats, Team } from '../../models';
import { NbaService } from '../../services/nba.service';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css'],
})
export class TeamStatsComponent implements OnInit {
  @Input()
  team!: Team;

  games$!: Observable<Game[]>;
  stats!: Stats;
  modalOpen: boolean;
  toDeleteTeam!: Team;
  pageNumber: number;
  constructor(protected nbaService: NbaService) {
    this.modalOpen = false;
    this.pageNumber = 6;
  }

  ngOnInit(): void {
    this.fetchGamesStats();
  }

  confirmDelete(team: Team): void {
    this.toDeleteTeam = team;
    this.modalOpen = true;
  }

  deleteTeam(): void {
    this.nbaService.removeTrackedTeam(this.toDeleteTeam);
    this.modalOpen = false;
  }

  fetchGamesStats(): void {
    this.games$ = this.nbaService
      .getLastResults(this.team, this.pageNumber)
      .pipe(
        tap(
          (games) =>
            (this.stats = this.nbaService.getStatsFromGames(games, this.team))
        )
      );
  }
}
