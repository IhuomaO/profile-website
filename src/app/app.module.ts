import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ConnectComponent } from './connect/connect.component';
import { ErrorPageComponent } from './errorPage.component';
import { SitefooterComponent } from './sitefooter/sitefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkComponent,
    ConnectComponent,
    ErrorPageComponent,
    SitefooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'navbar', component: NavbarComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'work', component: WorkComponent },
      { path: 'connect', component: ConnectComponent },
      { path: '', pathMatch: 'full', redirectTo: 'navbar' },
      { path: '**', component: ErrorPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
