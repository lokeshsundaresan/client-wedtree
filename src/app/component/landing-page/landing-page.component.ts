import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Menu_Service } from "../../../service/menu_service.service";
import { ProductCatlog } from "../../interface/productcatlog";
@Component({
  selector: "dash-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class DashPage implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = true;
  productlog: ProductCatlog[] = [];
  images = [62, 83, 466, 965, 982, 1043, 738].map(
    n => `https://picsum.photos/id/${n}/900/500`
  );

  constructor(config: NgbCarouselConfig, private product: Menu_Service) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
    this.product.productvalue.subscribe(data => {
      this.productlog = data;
    });
    this.invert();
  }
  invert() {
    setTimeout(() => {
      this.product.productvalue.subscribe(data => {
        this.productlog = data;
      });
    }, 10000);
  }
}
