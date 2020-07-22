import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Menu_barComponent } from "./component/menu_bar/menu_bar.component";
import { Menu_Service } from "../service/menu_service.service";
import { HttpClientModule } from "@angular/common/http";
import { DashPage } from "./component/landing-page/landing-page.component";
import { SpecificProduct } from "./component/view-product/view-product.component";
import { Categories } from "./component/collections/collection.component";
import { Footer } from "./component/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    SpecificProduct,
    Menu_barComponent,
    DashPage,
    Categories,
    Footer
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [Menu_Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
