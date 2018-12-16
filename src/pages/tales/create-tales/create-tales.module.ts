import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTalesPage } from './create-tales';

@NgModule({
  declarations: [
    CreateTalesPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTalesPage),
  ],
})
export class CreateTalesPageModule {}
