import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  profileJson: string = null;

  constructor(public auth: AuthService) {
    this.getPlayerProfile();
    console.log('PlayerService constructor', this.profileJson);
  } 

  getPlayerProfile() {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
  }



}
