import { Component, Input } from '@angular/core';

@Component({
  selector: 'full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.css']
})
export class FullScreenModalComponent {
    @Input() modalId: string | null = null;
}
