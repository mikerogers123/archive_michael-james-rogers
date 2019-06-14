import { Component } from '@angular/core';

@Component({
  selector: 'cv-download',
  templateUrl: './cv-download.component.html'
})
export class CvDownloadComponent {
  click() {
    const win = window.open("../../../assets/files/MichaelRogersCV_04012019.pdf", '_blank');
    win.focus();
  }
}
