import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-about-tile-mini",
  templateUrl: "./about-tile-mini.component.html",
  styleUrls: ["./about-tile-mini.component.css"]
})
export class AboutTileMiniComponent implements OnInit {
  @Input() title: String;
  @Input() description: String;
  constructor() {}

  ngOnInit(): void {}
}
