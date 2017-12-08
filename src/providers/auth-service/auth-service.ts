import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

	private isLoggedIn = false;

  constructor() { }

  login() : void {
    this.isLoggedIn = true;
  }
 
  // Logout a user, destroy token and remove
  // every information related to a user
  logout() : void {
    this.isLoggedIn = false;
  }
 
  // Returns whether the user is currently authenticated
  // Could check if current token is still valid
  authenticated() : boolean {
    return this.isLoggedIn;
  }

}
