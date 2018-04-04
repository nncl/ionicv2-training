import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
    selector: 'page-sign-in',
    templateUrl: 'sign-in.html',
})
export class SignInPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignInPage');
    }

    signInWithFacebook() {
        this.authService.signInWithFacebook()
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }

}
