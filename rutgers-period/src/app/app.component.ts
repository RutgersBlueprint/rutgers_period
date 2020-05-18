import { Component } from "@angular/core";
import {
  ScrollToService,
  ScrollToConfigOptions,
} from "@nicky-lenaers/ngx-scroll-to";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "rutgers-period";

  toggle() {
    console.log("tapped");
    const elem = document.getElementById("main-menu");
    if (elem.classList.contains("expanded")) {
      elem.classList.remove("expanded");
    } else {
      elem.classList.add("expanded");
    }
  }

  constructor(private scrollToService: ScrollToService) {}

  triggerScrollToAbout() {
    console.log("found");
    const config: ScrollToConfigOptions = {
      container: "custom-container",
      target: "landingSection",
    };

    this.scrollToService.scrollTo(config);
  }
}
