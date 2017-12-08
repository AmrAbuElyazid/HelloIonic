import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private username = 'null';

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  isValid(username, password) : boolean {
  	if(password == '1234') {
  		console.log('true')
  		this.username = username;
  		return true;
  	}
		console.log('false')
  	return false;
  }

  getUsername() {
  	return this.username;
  }

}
