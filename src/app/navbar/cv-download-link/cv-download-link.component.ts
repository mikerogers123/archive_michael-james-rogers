import { Component } from '@angular/core';

@Component({
  selector: 'cv-download-link',
  templateUrl: './cv-download-link.component.html'
})
export class CvDownloadLinkComponent {
  click() {
    const win = window.open("../../../assets/files/MichaelRogersCV_04012019.pdf", '_blank');
    win.focus();
  }
}
