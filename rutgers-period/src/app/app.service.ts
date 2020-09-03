import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor() {}

  triggerScrollToAbout() {
  }
}

// import { Injectable } from "@angular/core";
// import {
//   ScrollToService,
//   ScrollToConfigOptions,
// } from "@nicky-lenaers/ngx-scroll-to";

// @Injectable({
//   providedIn: "root",
// })
// export class AppService {
//   constructor(private scrollToService: ScrollToService) {}

//   triggerScrollToAbout() {
//     const config: ScrollToConfigOptions = {
//       target: "aboutSection",
//     };

//     this.scrollToService.scrollTo(config);
//   }
// }
