import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashPage } from "./component/landing-page/landing-page.component";
import { SpecificProduct } from "./component/view-product/view-product.component";
import { Categories } from "./component/collections/collection.component";

const routes: Routes = [
  {
    path: "",
    component: DashPage
  },
  {
    path: "product/:id",
    component: SpecificProduct
  },
  {
    path: "collection/:id",
    component: Categories
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
