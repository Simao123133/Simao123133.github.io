import { Component } from '@angular/core';
import { trigger, transition, style, query, group, animateChild, animate, state} from '@angular/animations'
import { OutletContext } from '@angular/router';
import { fader, slider} from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ // <-- add your animations here
    // fader,
    slider,
    // transformer,
    //fader
  ]
})
export class AppComponent {
  title = 'my-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
