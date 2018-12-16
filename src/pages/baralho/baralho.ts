import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BaralhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baralho',
  templateUrl: 'baralho.html',
})
export class BaralhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaralhoPage');
  }
  
  goToHetero2(){
    this.navCtrl.push('Hetero2Page')
  }
  goToLesbica2(){
    this.navCtrl.push('Lesbica2Page')
  }
  goToGay2(){
    this.navCtrl.push('Gay2Page')
  }

}
