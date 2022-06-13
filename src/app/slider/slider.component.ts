import { Component, OnInit } from '@angular/core';
import { Options, ChangeContext, PointerType} from "@angular-slider/ngx-slider";
import {Router} from '@angular/router'; // import router from angular router
import { NavigationStart } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  show: boolean = true;
  value: number = 1;
  options: any;
  constructor(private route:Router, private deviceService: DeviceDetectorService) {}

  valuesToPaths = new Map<number, string>();
  pathsToValues = new Map<string, number>();
  home: boolean = true;

  ngOnInit(): void {
    this.valuesToPaths.set(1, '/home')
    this.valuesToPaths.set(2, '/my-work')
    this.valuesToPaths.set(3, '/about-me')
    this.valuesToPaths.set(4, '/resume')
    this.valuesToPaths.set(5, '/contact')
    this.pathsToValues.set('/home', 1)
    this.pathsToValues.set('/my-work', 2)
    this.pathsToValues.set('/about-me', 3)
    this.pathsToValues.set('/resume', 4)
    this.pathsToValues.set('/contact', 5)

    this.route.events.subscribe(val => {
      if (val instanceof NavigationStart){
        this.value = this.pathsToValues.get(val.url) || 0;
        if (val.url === "/home"){
          this.home = false;
        }else{
          this.home = false;
        }
     }
    });
    this.options = {
      showTicksValues: this.deviceService.isDesktop(),
      stepsArray: [
        { value: 1, legend: "Home" },
        { value: 2, legend: "My Work"},
        { value: 3, legend: "About Me" },
        { value: 4, legend: "Resume" },
        { value: 5, legend: "Contact" },
      ],
    };
      
  }

  onUserChange(changeContext: ChangeContext): void {
    this.route.navigate([this.valuesToPaths.get(changeContext.value) || '']); // navigate to other page
  }

  clearOpacity(){
    this.show = true;
  }

  blurredOpacity(){
    this.show = false;
  }


}
