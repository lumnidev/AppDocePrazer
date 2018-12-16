import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalesPage } from './tales';

@NgModule({
  declarations: [
    TalesPage,
  ],
  imports: [
    IonicPageModule.forChild(TalesPage),
  ],
})
export class TalesPageModule {}
