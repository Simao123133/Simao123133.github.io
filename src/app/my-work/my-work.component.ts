import { Component, OnInit, ElementRef} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {

  constructor(private elementRef: ElementRef, private lightbox: Lightbox) { }

  private album: Array<any> = [];

  ngOnInit(): void {
    const photo= {
      src: "../assets/hacker.gif",
      caption: "",
      thumb: "./../assets/TSBData.png"
   };
   this.album.push(photo);

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = null 
  }

  goTo(url: string){
    window.open(url, "_blank");
  }

  open(): void {
    // open lightbox
    this.lightbox.open(this.album, 0);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
