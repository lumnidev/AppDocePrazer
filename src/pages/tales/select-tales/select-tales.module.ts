import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectTalesPage } from './select-tales';

@NgModule({
  declarations: [
    SelectTalesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectTalesPage),
  ],
})
export class SelectTalesPageModule {}
