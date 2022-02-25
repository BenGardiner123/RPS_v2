import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-app-auth-button',
  templateUrl: './app-auth-button.component.html',
  styleUrls: ['./app-auth-button.component.scss']
})
export class AppAuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService){}

  ngOnInit(): void {
  }s
  

  loginWithRedirect() {
    this.auth.loginWithRedirect();

  }

    
}
