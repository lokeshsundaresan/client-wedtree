import { Component, OnInit } from "@angular/core";
import { Catlog } from "../../interface/catlog";
import { DropCatlog } from "../../interface/dropdown";
import { Menu_Service } from "../../../service/menu_service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu_bar",
  templateUrl: "./menu_bar.component.html",
  styleUrls: ["./menu_bar.component.scss"]
})
export class Menu_barComponent implements OnInit {
  menulog: Catlog[] = [];
  droplog: DropCatlog[] = [];

  constructor(private menu: Menu_Service, private router: Router) {}

  ngOnInit() {
    this.menu.catlogvalue.subscribe(data => {
      this.menulog = data;
    });
    this.menu.dropmenuvalue.subscribe(data => {
      this.droplog = data;
    });
    this.timeout();
  }
  routing(id) {
    this.router.navigateByUrl(["/collection", id]);
  }
  timeout() {
    setTimeout(() => {
      this.ngOnInit();
    }, 10000);
  }
}
