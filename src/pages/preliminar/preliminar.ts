import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreliminarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preliminar',
  templateUrl: 'preliminar.html',
})
export class PreliminarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreliminarPage');
  }
  goToSex(){
    this.navCtrl.push('SexualidadePage')
  }
  goToLesbica(){
    this.navCtrl.push('LesbicaPage')
  }
  goToGay(){
    this.navCtrl.push('GayPage')
  }
}
