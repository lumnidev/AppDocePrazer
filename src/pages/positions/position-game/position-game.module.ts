import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PositionGamePage } from './position-game';

@NgModule({
  declarations: [
    PositionGamePage,
  ],
  imports: [
    IonicPageModule.forChild(PositionGamePage),
  ],
})
export class PositionGamePageModule {}
