import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeckGamePage } from './deck-game';

@NgModule({
  declarations: [
    DeckGamePage,
  ],
  imports: [
    IonicPageModule.forChild(DeckGamePage),
  ],
})
export class DeckGamePageModule {}
