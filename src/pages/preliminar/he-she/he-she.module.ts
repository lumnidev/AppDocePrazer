import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeShePage } from './he-she';

@NgModule({
  declarations: [
    HeShePage,
  ],
  imports: [
    IonicPageModule.forChild(HeShePage),
  ],
})
export class HeShePageModule {}
