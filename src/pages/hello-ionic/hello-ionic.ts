import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { SecondPage } from '../../pages/second/second';
 
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	username: string;

  constructor(public httpClient: HttpClient, public navCtrl: NavController, public authService: AuthServiceProvider, public user: UserProvider, public alertCtrl: AlertController) {
  	this.username = user.getUsername();
  }

  fbLogin() {
  	this.httpClient.get('https://devapi.creativesyard.com/api/auth/login/facebook')
  		.subscribe(res => {
  			console.log(res)
  		}, err => {
  			console.log(JSON.stringify(err))
  		})
  }

  loginUser() {
		let alert = this.alertCtrl.create({
		title: 'Login',
		inputs: [
		  {
		    name: 'username',
		    placeholder: 'Username'
		  },
		  {
		    name: 'password',
		    placeholder: 'Password',
		    type: 'password'
		  }
		],
		buttons: [
		  {
		    text: 'Cancel',
		    role: 'cancel',
		    handler: data => {
		      console.log('Cancel clicked');
		    }
		  },
		  {
		    text: 'Login',
		    handler: data => {
		      if (this.user.isValid(data.username, data.password)) {
			    this.authService.login();
			    this.username = this.user.getUsername();
		      } else {
		        // invalid login
		        return false;
		      }
		    }
		  }
		]
		});
		alert.present();
  }
 
  logoutUser() {
    this.authService.logout();
  }
 
  nextPage() {
    this.navCtrl.push(SecondPage, {
    	username: this.username
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'No entry!',
        subTitle: 'You shall not pass',
        buttons: ['Okay']
      });
      alert.present();
    });
  }
 
  isAuthenticated() {
    return this.authService.authenticated();
  }
}
