import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  goToPreliminar(){
    this.navCtrl.push('PreliminarPage')

  }
  goToBaralho(){
    this.navCtrl.push('BaralhoPage')

  }
  goToPosicoes(){
    this.navCtrl.push('PosicoesPage')}
    
    goToContos(){
      this.navCtrl.push('ContosPage')}
      
      goToStripetease(){
        this.navCtrl.push('StripeteasePage')
      
      }

}
