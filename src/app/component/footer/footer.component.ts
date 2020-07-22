import { Component, OnInit } from "@angular/core";
import { Menu_Service } from "../../../service/menu_service.service";
import { DropCatlog } from "../../interface/dropdown";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class Footer implements OnInit {
  explore: DropCatlog[] = [];
  constructor(private menu: Menu_Service) {
    this.menu.dropmenuvalue.subscribe(data => {
      this.explore = data.slice();
    });
  }
}
