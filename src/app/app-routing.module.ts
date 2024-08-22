import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShowitemComponent } from './showitem/showitem.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
  },
  {
    path :'login',
    component:LoginComponent
  },
  {
    path :'Signup',
    component:SignupComponent
  },
  {
    path :'showitem',
    component:ShowitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
