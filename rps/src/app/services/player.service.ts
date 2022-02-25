import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import Auth  from '../../../auth_config.json';
import { Player } from '../Models/player';
import { RegisterUserResponseModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //add the api url to the service
  private url = Auth.apiUri + "Player"

  profileJson: string = null;

  constructor(public auth: AuthService, private http: HttpClient) {
    this.getPlayerProfile();

    console.log('PlayerService constructor', this.profileJson);
  } 

  getPlayerProfile() {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
  }

  //create the player on the api using a post
  createPlayer(player: string): Observable<RegisterUserResponseModel> {
    //create a new  player object and sdd the username to the object
    let newPlayer = {
      username: player
    };


    return this.http.post<RegisterUserResponseModel>(this.url + "/CreatePlayer", newPlayer);
  }
  



}
