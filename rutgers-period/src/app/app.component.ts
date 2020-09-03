import { Component, HostListener, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild('mobileMenu') mobileMenu: ElementRef
  isDesktop: Boolean;
  isMobileMenuOpen = false;

  constructor() {
    if(window.innerWidth < 1450){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 1450){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  openMobileMenu(){
    if(this.isMobileMenuOpen){
      console.log('caught true')
      this.mobileMenu.nativeElement.className = "bg-blue-300 text-white flex-col justify-end px-8 hidden";
      this.isMobileMenuOpen = false;
    } else{
      console.log('caught false')
      this.mobileMenu.nativeElement.className = "bg-blue-300 text-white flex-col justify-end px-8 block";
      this.isMobileMenuOpen = true;
    }
  }
}











































// import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
// import { ViewportScroller } from '@angular/common';

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"],
// })
// export class AppComponent {
//   @ViewChild('periodContainer') periodContainer: ElementRef;
//   @ViewChild('mainMenu') mainMenu: ElementRef;
//   title = "rutgers-period";

//   constructor(private scroller: ViewportScroller) {
//     //scroller.setOffset([100,100])
//   }

//   // ngOnInit() {
//   //   window.addEventListener('scroll', this.scroll, true); //third parameter
//   // }

//   // ngOnDestroy() {
//   //     window.removeEventListener('scroll', this.scroll, true);
//   // }

//   // scroll = (event): void => {
//   //   if(this.scroller.getScrollPosition()[1] > 40){
//   //     this.mainMenu.nativeElement.className = 'mini-main sticky top-0';
//   //     this.periodContainer.nativeElement.className = 'mini-nav sticky top-0';
//   //   } else{
//   //     this.periodContainer.nativeElement.className = 'flex items-center lg:items-end justify-between flex-wrap pt-6 pr-6 pl-6 pb-3 shadow-xl sticky top-0 bg-white';
//   //     this.mainMenu.nativeElement.className = 'w-full flex-grow lg:overflow-y-auto lg:flex lg:items-center lg:flex-row lg:justify-end lg:w-auto bg-white main-menu-slider pl-4 pr-4 sticky top-0';

//   //   }
//   // };

//   toggle() {
//     const elem = document.getElementById("main-menu");
//     if (elem.classList.contains("expanded")) {
//       elem.classList.remove("expanded");
//     } else {
//       elem.classList.add("expanded");
//     }
//   }
// }
