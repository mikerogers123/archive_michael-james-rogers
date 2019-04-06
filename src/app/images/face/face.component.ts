import { Component, Input } from '@angular/core';
import { ImageSize } from '../models/image-size';

@Component({
  selector: 'face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent {
  @Input() size: ImageSize = 'md';
}
