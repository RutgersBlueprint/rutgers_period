import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "rutgers-period";

  constructor() {}

  toggle() {
    console.log("tapped");
    const elem = document.getElementById("main-menu");
    if (elem.classList.contains("expanded")) {
      elem.classList.remove("expanded");
    } else {
      elem.classList.add("expanded");
    }
  }
}
