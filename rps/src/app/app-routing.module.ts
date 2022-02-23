import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { DisplayResultComponent } from './components/game/display-result/display-result.component';
import { RoundSelectionComponent } from './components/game/round-selection/round-selection.component';
import { UserChoiceComponent } from './components/game/user-choice/user-choice.component';
import { HomeComponent } from './components/home/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard/leaderboard.component';

const routes: Routes = [
  {path: "selection", component: UserChoiceComponent,  canActivate: [AuthGuard]},
  {path: "results", component: DisplayResultComponent,  canActivate: [AuthGuard]},
  {path: "leaderboard", component: LeaderboardComponent, },
  {path: "rounds", component: RoundSelectionComponent,  canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
