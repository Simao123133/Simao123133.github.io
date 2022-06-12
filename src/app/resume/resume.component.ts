import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = null 
  }

}
