import { Component, OnInit } from "@angular/core";
import { Menu_Service } from "../service/menu_service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private menu: Menu_Service) {}

  ngOnInit() {
    this.menu.getCatalog().subscribe();
    this.menu.getDropCatalog().subscribe();
    this.menu.getProduct().subscribe();
  }
}
