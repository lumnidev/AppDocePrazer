import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StripeteasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stripetease',
  templateUrl: 'stripetease.html',
})
export class StripeteasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StripeteasePage');
  }

  goToHetero4(){
    this.navCtrl.push('Hetero4Page')

  }
  goToGay4(){
    this.navCtrl.push('Gay4Page')
  }
  goToLesbica4(){
    this.navCtrl.push('Lesbica4Page')
  }




}
