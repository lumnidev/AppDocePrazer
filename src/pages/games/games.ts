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

  private nextPages = {
    
    testPage: "TestPage",
    positionsPage: "PositionsPage",
    deckPage: "DeckGamePage",
    stripPage: "StripteasePage",
    prelimPage: "PreliminaryPage",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }
  goToPreliminar() {
    this.navCtrl.push("SelectSexPage", {nextPage: this.nextPages.prelimPage})

  }
  goToDeck() {
    this.navCtrl.push("SelectSexPage", {nextPage: this.nextPages.deckPage})

  }
  goToPositions() {
    this.navCtrl.push("SelectSexPage", {nextPage: this.nextPages.positionsPage})
  }

  // goToPositions() {
  //   this.navCtrl.push('PositionsPage')
  // }

  goToTales() {
    this.navCtrl.push('TalesPage');
  }

  goToStripetease() {
    this.navCtrl.push("SelectSexPage", {nextPage: this.nextPages.stripPage})

  }

}
