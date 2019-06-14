import { BtnModule } from './../btn/btn.module';
import { IconsModule } from './../icons/icons.module';
import { NavBarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    CvDownloadComponent
  ],
  imports: [
    IconsModule,
    RouterModule,
    BtnModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavbarModule { }
