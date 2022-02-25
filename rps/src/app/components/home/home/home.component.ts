import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap } from 'rxjs/operators';
import { Player } from 'src/app/Models/player';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //set a player objcet and set the username to ''
  newPlayer: Player = {
    username: ''
  };





  constructor(public auth: AuthService, private router: Router, private gameService: GameService, private playerService: PlayerService) { }

  ngOnInit(): void {
    
    this.auth.user$.pipe(
      concatMap(newPlayer => this.playerService.createPlayer(newPlayer.name)),
    ).subscribe(response => {
      console.log("response", response);
    })


  }



  play() {
    this.router.navigate(['/rounds']);
  }



}
