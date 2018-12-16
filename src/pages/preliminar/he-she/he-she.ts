import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeShePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-he-she',
  templateUrl: 'he-she.html',
})
export class HeShePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeShePage');
  }
  goToHetero(){
    this.navCtrl.push('HeteroPage')
  }
  goToHeterom(){
    this.navCtrl.push('HeteroMPage')
  }
  

}
