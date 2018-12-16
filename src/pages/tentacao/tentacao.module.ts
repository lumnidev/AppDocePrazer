import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TentacaoPage } from './tentacao';

@NgModule({
  declarations: [
    TentacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(TentacaoPage),
  ],
})
export class TentacaoPageModule {}
