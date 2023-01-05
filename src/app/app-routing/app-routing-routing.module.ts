import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../component/users/users.component";
import {UserDetailComponent} from "../component/user-detail/user-detail.component";

const routes: Routes = [
  {path:'user', component : UsersComponent},
  {path:'userdetails', component : UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
