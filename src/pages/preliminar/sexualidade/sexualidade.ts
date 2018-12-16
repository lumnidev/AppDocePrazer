import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SexualidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sexualidade',
  templateUrl: 'sexualidade.html',
})
export class SexualidadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SexualidadePage');
  }
  goToHeShe(){
    this.navCtrl.push('HeShePage')
  }
  goToLesbica(){
    this.navCtrl.push('LesbicaPage')
  }
  goToGay(){
    this.navCtrl.push('GayPage')
  }

}
