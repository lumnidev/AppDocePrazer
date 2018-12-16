import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tales',
  templateUrl: 'tales.html',
})
export class TalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TalesPage');
  }
  goToCreate(){
    this.navCtrl.push('CreateTalesPage');
  }
  goToCategory(){
    this.navCtrl.push('CategoryTalesPage');
  }
}
