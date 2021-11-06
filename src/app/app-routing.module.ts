import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginWarningComponent } from './components/snackbar/login-warning';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { CardComponent } from './shared/widgets/card/card.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path:'', redirectTo:"home", pathMatch:"full" },
  { path:'home', component:HomeComponent },
  { path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard] },
  { path:'products', component:ProductsComponent },
  { path:'cart', component:CartComponent},
  { path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent,HomeComponent,DashboardComponent,SideNavComponent,
  ProductsComponent,CartComponent,LoginComponent,RegisterComponent,LoginWarningComponent,CardComponent,CartComponent]
