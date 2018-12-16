import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sexualidade1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sexualidade1',
  templateUrl: 'sexualidade1.html',
})
export class Sexualidade1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sexualidade1Page');
  }

  goToHetero1(){
    this.navCtrl.push('Hetero1Page')

  }

}





















