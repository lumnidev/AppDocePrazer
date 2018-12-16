import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContosPage } from './contos';

@NgModule({
  declarations: [
    ContosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContosPage),
  ],
})
export class ContosPageModule {}
