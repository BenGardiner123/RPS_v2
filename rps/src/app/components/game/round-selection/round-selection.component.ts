import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from 'src/app/services/authenticate.service';
import { GameService } from 'src/app/services/game.service';


@Component({
  selector: 'app-round-selection',
  templateUrl: './round-selection.component.html',
  styleUrls: ['./round-selection.component.scss']
})
export class RoundSelectionComponent implements OnInit {

  public isSelected = false;

  public oneSelected: boolean;
  public threeSelected: boolean;
  public fiveSelected: boolean;


  constructor(public router: Router, private gameService: GameService, public auth: AuthenticationService) {
   
    this.oneSelected = false;
    this.threeSelected = false;
    this.fiveSelected = false;
  }

  ngOnInit(): void {


  }


  chooseThisRound(option: '1' | '3' | '5') {
    if (option == '1') {
      this.oneSelected = !this.oneSelected;
      this.threeSelected = false;
      this.fiveSelected = false;
    }
    else if (option == '3') {
      this.threeSelected = !this.threeSelected;
      this.oneSelected = false;
      this.fiveSelected = false;
    }
    else if (option == '5') {
      this.oneSelected = false;
      this.threeSelected = false;
      this.fiveSelected = !this.fiveSelected;
    }


  }

  makeRoundSelection() {
    let setRoundLimit: number;

    if (this.oneSelected) {
      this.gameService.commitRoundSelection('1');
      setRoundLimit = 1;
      this.gameService.startGame(setRoundLimit);

    }
    else if (this.threeSelected) {
      this.gameService.commitRoundSelection('3');
      setRoundLimit = 3;
      this.gameService.startGame(setRoundLimit);

    }
    else if (this.fiveSelected) {
      this.gameService.commitRoundSelection('5');
      setRoundLimit = 5;
      this.gameService.startGame(setRoundLimit)

    }

    this.router.navigateByUrl("/selection");

  }

  //disable the button until the user selects a round
  disableButton() {
    if (this.oneSelected || this.threeSelected || this.fiveSelected) {
      this.isSelected = true;
    }
    else {
      this.isSelected = false;
    }
  }

}
