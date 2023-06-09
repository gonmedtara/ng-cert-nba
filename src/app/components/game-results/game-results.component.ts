import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { NbaService } from '../../services/nba.service';
import { Game, Team } from '../../models';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css'],
})
export class GameResultsComponent {
  team?: Team;
  games$?: Observable<Game[]>;
  pageNumber!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nbaService: NbaService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.pageNumber = +(paramMap.get('pageNumber') ?? '12');
      this.team = this.nbaService
        .getTrackedTeams()
        .find((team) => team.abbreviation === paramMap.get('teamAbbr'));
      if (this.team)
        this.games$ = this.nbaService.getLastResults(
          this.team,
          this.pageNumber
        );
    });
  }
}
