import { CommonModule } from '@angular/common';
import { FaceComponent } from './face/face.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FaceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FaceComponent
  ],
  providers: [],
  bootstrap: []
})
export class ImagesModule { }
