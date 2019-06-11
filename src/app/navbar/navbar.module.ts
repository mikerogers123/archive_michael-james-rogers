import { IconsModule } from './../icons/icons.module';
import { NavBarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { ImagesModule } from '../images/images.module';
import { CvDownloadLinkComponent } from './cv-download-link/cv-download-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    CvDownloadLinkComponent
  ],
  imports: [
    IconsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavbarModule { }
