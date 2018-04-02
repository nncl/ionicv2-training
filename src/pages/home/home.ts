import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactPage} from '../contact/contact';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    contactPage = ContactPage;

    constructor(public navCtrl: NavController) {

    }

}
