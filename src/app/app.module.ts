import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { GameResultsComponent } from './components/game-results/game-results.component';
import { GameStatsComponent } from './components/game-stats/game-stats.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { FilterConfDivPipe } from './pipes/filter-conf-div.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent,
    GameResultsComponent,
    GameStatsComponent,
    ModalWindowComponent,
    FilterConfDivPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
