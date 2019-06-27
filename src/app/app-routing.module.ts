import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MycustomerComponent } from "./mycustomer/mycustomer.component";
import { MymallsComponent } from "./mymalls/mymalls.component";
import { MyproductsComponent } from "./myproducts/myproducts.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },

  {
    path: "mycustomer",
    component: MycustomerComponent
  },

  {
    path: "mymalls",
    component: MymallsComponent
  },

  {
    path: "myproducts",
    component: MyproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
