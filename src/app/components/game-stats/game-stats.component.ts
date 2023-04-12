import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

import { Division, Team } from '../../models';
import { NbaService } from '../../services/nba.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css'],
})
export class GameStatsComponent implements OnDestroy {
  private destroyed$: Subject<void> = new Subject();

  teams$: Observable<Team[]>;
  allTeams: Team[] = [];
  divisions: Division[];

  fctrlConf: FormControl = new FormControl(null);
  fctrlDiv: FormControl = new FormControl(null);
  fctrlTeam: FormControl = new FormControl(null);

  constructor(protected nbaService: NbaService) {
    this.teams$ = nbaService
      .getAllTeams()
      .pipe(tap((data) => (this.allTeams = data)));

    this.fctrlConf.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.fctrlDiv.reset(null);
        this.fctrlTeam.reset(null);
      });
    this.fctrlDiv.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.fctrlTeam.reset(null);
      });

    this.divisions = nbaService.getDivisions();
  }

  trackTeam(teamId: string): void {
    let team = this.allTeams.find((team) => team.id == Number(teamId));
    if (team && team.id !== 0) this.nbaService.addTrackedTeam(team);
  }

  trackByFn(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
