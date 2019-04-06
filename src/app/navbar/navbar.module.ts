import { IconsModule } from './../icons/icons.module';
import { NavBarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { ImagesModule } from '../images/images.module';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    IconsModule,
    ImagesModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavbarModule { }
