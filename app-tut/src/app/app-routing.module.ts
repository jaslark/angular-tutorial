import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormArrayComponent } from "./form-array/form-array.component";
import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "form-array",
    component: FormArrayComponent
  },
  {
    path: "sign-up",
    component: RegisterComponent
  },
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
