import { IconsModule } from './../icons/icons.module';
import { NavBarComponent } from './navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    IconsModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavbarModule { }
