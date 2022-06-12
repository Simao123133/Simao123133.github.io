import { Component, OnInit, ElementRef} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent{

  constructor(private elementRef: ElementRef, private lightbox: Lightbox) { }

  private album: Array<any> = [];

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = null 
  }

  goTo(url: string){
    window.open(url, "_blank");
  }

}
