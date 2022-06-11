import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent, data: { animation: 0 } },
{ path: 'my-work', component: MyWorkComponent, data: { animation: 1 } },
{ path: 'about-me', component: AboutMeComponent, data: { animation: 2 } },
{ path: 'resume', component: ResumeComponent, data: { animation: 3 } },
{ path: 'contact', component: ContactComponent, data: { animation: 4 } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
