import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.scss"]
})
export class WarningAlertComponent implements OnInit {
  title = "I'm a warning-alert component";
  constructor() {}

  ngOnInit(): void {}
}
