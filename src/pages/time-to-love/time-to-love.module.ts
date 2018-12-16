import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeToLovePage } from './time-to-love';

@NgModule({
  declarations: [
    TimeToLovePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeToLovePage),
  ],
})
export class TimeToLovePageModule {}
