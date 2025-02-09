import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leitor-pdf';

  @ViewChild('externalPdfViewer', { static: true }) externalPdfViewer: any;

  public openPdf() {
    console.log('opening pdf in new tab!');
    this.externalPdfViewer.pdfSrc = 'gre_research_validity_data.pdf';
    this.externalPdfViewer.refresh();
  }
  
}
