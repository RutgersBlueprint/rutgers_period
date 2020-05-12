import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { AboutComponent } from "./pages/about/about.component";
import { LearnMoreComponent } from "./pages/learn-more/learn-more.component";
import { EventsComponent } from "./pages/events/events.component";
import { AboutTileMiniComponent } from "./components/about-tile-mini/about-tile-mini.component";
import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    AboutComponent,
    LearnMoreComponent,
    EventsComponent,
    AboutTileMiniComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faBars);
  }
}
