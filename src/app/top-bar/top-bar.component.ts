import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AnimationEvent } from "@angular/animations";
import { ViewEncapsulation } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        color: "white",
        transform: "translateY(+0px)"
      })),
      state('closed', style({
        transform: "translateY(-30px)",
        opacity: 0,
        color: "red"
      })),
      transition('open => closed', [
        animate('0.7s')
      ]),
      transition('closed => open', [
        animate('0s')
      ]),
    ]),
  ]
})
export class TopBarComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github.svg"));
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedin.svg"));
    
  }

  numberOfLikes = 0;

  state = "open";

  toggle() {
    this.state = "closed";
    this.numberOfLikes +=1;
    localStorage.setItem('hearts', JSON.stringify(this.numberOfLikes));
  }

  ngOnInit(): void {
    this.numberOfLikes = parseInt(localStorage.getItem('hearts') || '0');
  }

  animEnd(event: AnimationEvent){
      this.state = "open";
  }

  goToGithub(){
    window.open("https://github.com/Simao123133?tab=repositories", "_blank");
  }
  goToLinkedin(){
    window.open("https://www.linkedin.com/in/sim%C3%A3o-amaro-582011173/", "_blank");
  }

}
