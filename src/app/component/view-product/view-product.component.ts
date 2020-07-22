import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Menu_Service } from "../../../service/menu_service.service";
import { ProductCatlog } from "../../interface/productcatlog";

@Component({
  selector: "specific",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"]
})
export class SpecificProduct {
  id: string;
  private sub: any;
  product: ProductCatlog;
  quantity: number;
  quantityerror: boolean = false;

  constructor(private route: ActivatedRoute, private menu: Menu_Service) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      this.details(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }
  details(item) {
    this.menu.productvalue.subscribe((data: ProductCatlog[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].product_name === item) {
          this.product = data[i];
          this.quantity = data[i].min_order;
        }
      }
    });
  }
  decrement() {
    if (this.quantity <= this.product.min_order) {
      this.quantity = this.product.min_order;
      this.quantityerror = true;
    } else {
      this.quantity = this.quantity - 1;
      this.quantityerror = false;
    }
  }
  increment() {
    this.quantityerror = false;
    this.quantity = this.quantity + 1;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
