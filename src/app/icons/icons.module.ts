import { DownloadIconComponent } from './download-icon/download-icon.component';
import { NgModule } from '@angular/core';
import { MenuIconComponent } from './menu-icon/menu-icon.component';

@NgModule({
  declarations: [
    MenuIconComponent,
    DownloadIconComponent
  ],
  imports: [
  ],
  exports: [
    MenuIconComponent,
    DownloadIconComponent
  ],
  providers: [],
  bootstrap: []
})
export class IconsModule { }
