import { IconsModule } from './../icons/icons.module';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';
import { BorderComponent } from './border/border.component';

@NgModule({
  declarations: [
    NavBarComponent,
    BorderComponent
  ],
  imports: [
    IconsModule
  ],
  exports: [
    NavBarComponent,
    BorderComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
