import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { AboutComponent } from './pages/about/about.component';
import { LearnMoreComponent } from './pages/learn-more/learn-more.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, LandingComponent, AboutComponent, LearnMoreComponent, EventsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
