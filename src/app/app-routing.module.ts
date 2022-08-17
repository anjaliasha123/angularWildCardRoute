import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskComponent } from "./task/task.component";
import { ProductsComponent } from "./products/products.component";
import { ProductViewComponent } from "./product-view/product-view.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductidComponent } from "./productid/productid.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "product-view", pathMatch: "full" },
  { path: "learn", component: TaskComponent },
  { path: "products", component: ProductsComponent },
  { path: "product-view", component: ProductViewComponent },
  { path: "product-edit", component: ProductEditComponent },
  { path: "product-id/:id/:id2", component: ProductidComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
