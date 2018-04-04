import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class AuthProvider {

    constructor(private facebook: Facebook) {
        console.log('Hello AuthProvider Provider');
    }

    signInWithFacebook() {
        return this.facebook.login(['public_profile', 'email'])
            .then((res: FacebookLoginResponse) => {
                return res.authResponse.accessToken;
            });
    }

}
