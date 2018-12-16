import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GayPage } from './gay';

@NgModule({
  declarations: [
    GayPage,
  ],
  imports: [
    IonicPageModule.forChild(GayPage),
  ],
})
export class GayPageModule {}
