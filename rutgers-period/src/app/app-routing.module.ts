import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { AboutComponent } from "./pages/about/about.component";
import { LearnMoreComponent } from "./pages/learn-more/learn-more.component";
import { EventsComponent } from "./pages/events/events.component";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "about", component: AboutComponent },
  { path: "learn-more", component: LearnMoreComponent },
  { path: "events", component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ScrollToModule.forRoot()],
  exports: [RouterModule, ScrollToModule],
})
export class AppRoutingModule {}
