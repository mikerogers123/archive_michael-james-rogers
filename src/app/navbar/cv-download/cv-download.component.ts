import { Component } from '@angular/core';
import { openInNewWindow } from 'src/app/functions/open-in-new-window';

const cvUri = '../../../assets/files/MichaelRogersCV_04012019.pdf';

@Component({
  selector: 'cv-download',
  templateUrl: './cv-download.component.html'
})
export class CvDownloadComponent {
  click = () => openInNewWindow(cvUri);
}
