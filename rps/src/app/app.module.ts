import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment as env } from '../environments/environment';
import { RoundSelectionComponent } from './components/game/round-selection/round-selection.component';
import { DisplayResultComponent } from './components/game/display-result/display-result.component';
import { UserChoiceComponent } from './components/game/user-choice/user-choice.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard/leaderboard.component';
import { GameContainerComponent } from './components/game/game-container/game-container.component';
import { ResultDetailComponent } from './components/game/result-detail/result-detail.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AppAuthButtonComponent } from './components/app-auth-button/app-auth-button.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppAuthButtonComponent,
    RoundSelectionComponent,
    DisplayResultComponent,
    UserChoiceComponent,
    LeaderboardComponent,
    GameContainerComponent,
    ResultDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
