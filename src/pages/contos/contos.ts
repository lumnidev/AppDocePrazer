import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contos',
  templateUrl: 'contos.html',
})
export class ContosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContosPage');
  }
  goToCreat(){
    this.navCtrl.push('CreatContosPage');
  }
  goToNivel(){
    this.navCtrl.push('NivelPage');
  }

}
