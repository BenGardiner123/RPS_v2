import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  
  //username as a strnig
  public username: string = "";

  constructor(public authService: AuthService) {
    this.authService.user$.subscribe(user => { 
      this.username = user.name;
     }
    );
  }

  //create a getter for the username
  public get userName(): string {
    return this.username;
  }

 



  
}