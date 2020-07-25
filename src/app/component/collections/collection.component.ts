import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Menu_Service } from "../../../service/menu_service.service";
import { ProductCatlog } from "../../interface/productcatlog";

@Component({
  selector: "collection",
  templateUrl: "./collection.component.html"
})
export class Categories implements OnInit {
  private sub: any;
  public id: string;
  productlog: ProductCatlog[] = [];

  constructor(private route: ActivatedRoute, private menu: Menu_Service) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
    this.menu.productvalue.subscribe(data => {
          this.productlog=data;
     
    });
  }
}
