import { Injectable } from "@angular/core";
import { Catlog } from "../app/interface/catlog";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DropCatlog } from "../app/interface/dropdown";
import { ProductCatlog } from "../app/interface/productcatlog";

@Injectable({
  providedIn: "root"
})
export class Menu_Service {
  _getmenuitem = "https://wedtree--lokeshvirtusa.repl.co/getcatlog";
  _getdropmenuitem = "https://wedtree--lokeshvirtusa.repl.co/getdropcatlog";
  _getProduct = "https://wedtree--lokeshvirtusa.repl.co/getproduct";

  private CatlogSubject: BehaviorSubject<[Catlog]>;
  public catlogvalue: Observable<[Catlog]>;
  private DropMenuSubject: BehaviorSubject<[DropCatlog]>;
  public dropmenuvalue: Observable<[DropCatlog]>;

  private ProductSubject: BehaviorSubject<[ProductCatlog]>;
  public productvalue: Observable<[ProductCatlog]>;

  constructor(private http: HttpClient, private route: Router) {
    this.CatlogSubject = new BehaviorSubject<[Catlog]>(
      JSON.parse(localStorage.getItem("CatlogArray"))
    );
    this.catlogvalue = this.CatlogSubject.asObservable();
    this.DropMenuSubject = new BehaviorSubject<[DropCatlog]>(
      JSON.parse(localStorage.getItem("DropMenu Array"))
    );
    this.dropmenuvalue = this.DropMenuSubject.asObservable();
    this.ProductSubject = new BehaviorSubject<[ProductCatlog]>(
      JSON.parse(localStorage.getItem("productArray"))
    );
    this.productvalue = this.ProductSubject.asObservable();
  }
  getCatalog() {
    return this.http.get<any>(this._getmenuitem).pipe(
      map(catlog => {
        localStorage.setItem("CatlogArray", JSON.stringify(catlog));
        this.CatlogSubject.next(catlog);
      })
    );
  }
  getDropCatalog() {
    return this.http.get<any>(this._getdropmenuitem).pipe(
      map(dropmenu => {
        localStorage.setItem("DropMenu Array", JSON.stringify(dropmenu));
        this.DropMenuSubject.next(dropmenu);
      })
    );
  }
  getProduct() {
    return this.http.get<any>(this._getProduct).pipe(
      map(get_product => {
        localStorage.setItem("productArray", JSON.stringify(get_product));
        this.ProductSubject.next(get_product);
      })
    );
  }
}
