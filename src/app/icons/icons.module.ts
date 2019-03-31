import { NgModule } from '@angular/core';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { CloseIconComponent } from './close-icon/close-icon.component';

@NgModule({
  declarations: [
    MenuIconComponent,
    CloseIconComponent
  ],
  imports: [
  ],
  exports: [
    MenuIconComponent,
    CloseIconComponent
  ],
  providers: [],
  bootstrap: []
})
export class IconsModule { }
