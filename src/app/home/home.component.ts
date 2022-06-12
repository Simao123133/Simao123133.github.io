import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    //this.elementRef.nativeElement.ownerDocument
    //  .body.style.backgroundImage ="url('assets/Coding2.webp')"; 
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundSize = "cover"; 
  }

}
