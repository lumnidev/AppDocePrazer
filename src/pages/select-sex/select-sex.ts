import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectSexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-sex',
  templateUrl: 'select-sex.html',
})
export class SelectSexPage {

  private nextPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nextPage = this.navParams.get("nextPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectSexPage');
  }

  goToPageWithHeteroOpt() {
    this.navCtrl.push(this.nextPage);

  }

}
