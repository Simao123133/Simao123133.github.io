import { Component, OnInit, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  desktop: boolean = true;

  constructor(private elementRef:ElementRef, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.desktop = this.deviceService.isDesktop();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = null 
  }

}
