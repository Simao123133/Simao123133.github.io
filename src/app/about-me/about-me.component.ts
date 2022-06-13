import { Component, OnInit, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private elementRef:ElementRef, private deviceService: DeviceDetectorService) { }

  desktop: boolean = true;

  ngOnInit(): void {
    this.desktop = this.deviceService.isDesktop();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = null 
  }

}
