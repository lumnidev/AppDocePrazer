import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sexualidade4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sexualidade4',
  templateUrl: 'sexualidade4.html',
})
export class Sexualidade4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sexualidade4Page');
  }

  goToBaralho(){
    this.navCtrl.push('RapadinhaPage')
   }




}
