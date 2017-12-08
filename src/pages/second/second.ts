import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { UserProvider } from './../../providers/user/user';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
	username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider, public authService: AuthServiceProvider) {
		this.username = user.getUsername();
  }

  ionViewCanEnter() {
    return this.authService.authenticated();
  }

}
