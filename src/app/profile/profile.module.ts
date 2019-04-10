import { ImagesModule } from './../images/images.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineBreakModule } from '../line-break/line-break.module';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImagesModule,
    LineBreakModule
  ],
  exports: [
    ProfilePageComponent
  ],
  providers: []
})
export class ProfileModule { }
