import {Component, ElementRef, ViewChild} from '@angular/core';
import {ImageViewerComponent} from '../../imageviewer/imageviewer.component';
import {ImageButtonEventsTriggerService} from '../../imageviewer/image-button-events-trigger.service';

@Component({
  selector: 'ngx-simpleuse',
  templateUrl: './simpleuse.component.html',
  styleUrls: ['./simpleuse.component.scss']
})
export class SimpleUseComponent {
  samples = [{label: 'Image 6', url: 'http://invalid-url-01/api/pages/image/1/jpg'},
    { label: 'PDF Test', url: 'https://hallysonh.github.io/ngx-imageviewer/pdf-test.pdf' },
    { label: 'Image 1 (BIG)', url: 'https://hallysonh.github.io/ngx-imageviewer/assets/imgs/sample-0.jpg' },
    { label: 'Image 2', url: 'https://hallysonh.github.io/ngx-imageviewer/assets/imgs/sample-1.jpg' },
    { label: 'Image 3', url: 'https://hallysonh.github.io/ngx-imageviewer/assets/imgs/sample-2.jpg' },
    { label: 'Image 4', url: 'https://hallysonh.github.io/ngx-imageviewer/assets/imgs/sample-3.jpg' },
    { label: 'Image 5', url: 'https://hallysonh.github.io/ngx-imageviewer/assets/imgs/sample-4.jpg' },
    { label: 'Image 6', url: 'https://hallysonh.github.io/ngx-imageviewer/assets/imgs/sample-5.jpg' },
    { label: 'Image 6', url: 'http://invalid-url-02/api/pages/image/1' }
  ];

  canvasWidth = 800;
  canvasHeight = 600;
  imageSrc = this.samples[0].url;

  constructor(private imageButtonEventsTrigger: ImageButtonEventsTriggerService) {

  }

  zoomIn () {
    this.imageButtonEventsTrigger.emitZoomIn();
  }

  zoomOut () {
    this.imageButtonEventsTrigger.emitZoomOut();
  }

  rotateRight () {
    this.imageButtonEventsTrigger.emitRotateRight();
  }

  rotateLeft () {
    this.imageButtonEventsTrigger.emitRotateLeft();
  }

  resetImage () {
    this.imageButtonEventsTrigger.emitResetImage();
  }
}
