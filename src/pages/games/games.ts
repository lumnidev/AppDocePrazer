import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

  
  goToPreliminares() {
    this.navCtrl.push('PreliminaresPage');
  }

  goToContos() {
    this.navCtrl.push('ContosPage');
  }

  goToTentacao() {
    this.navCtrl.push('TentacaoPage');
  }

  goToStriptease() {
    this.navCtrl.push('StripteasePage');
  }

  goToTimeToLove() {
    this.navCtrl.push('TimeToLovePage');
  }

}
