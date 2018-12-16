import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SexualidadePage } from './sexualidade';

@NgModule({
  declarations: [
    SexualidadePage,
  ],
  imports: [
    IonicPageModule.forChild(SexualidadePage),
  ],
  exports: [
    SexualidadePage
  ]
})
export class SexualidadePageModule {}
