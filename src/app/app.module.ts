import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { SliderComponent } from './slider/slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { LightboxModule } from 'ngx-lightbox';
import { AvatarModule } from 'ngx-avatar';
import { RecaptchaModule, RecaptchaFormsModule,  RECAPTCHA_SETTINGS, RecaptchaSettings  } from "ng-recaptcha";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    MyWorkComponent,
    BottomBarComponent,
    SliderComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    NgxSliderModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    PdfViewerModule,
    FormsModule,
    MatCardModule,
    LightboxModule,
    AvatarModule,
    RecaptchaFormsModule,
    RecaptchaModule
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: { siteKey: "6Lc2y2kgAAAAAFkTKrzEyNAYTMCjFE65VEb_BjJr" } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
