import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  
  //username as a strnig
  username: string = "";

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe(user => { 
     this.username = user.email;
    });
  }

  //returns the username
  public getUsername(): string {
    return this.username;
  }

  
}