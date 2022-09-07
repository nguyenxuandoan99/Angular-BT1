import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path : 'home' , component : AppComponent},
  {path : 'login', component : LoginComponent },
  {path : 'product', component : ProductComponent},
  {path : 'update', component : UpdateproductComponent},
  {path : 'listproduct' , component : ProductListComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
