import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaContosPage } from './pagina-contos';

@NgModule({
  declarations: [
    PaginaContosPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaContosPage),
  ],
})
export class PaginaContosPageModule {}
