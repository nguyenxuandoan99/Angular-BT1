import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : 'home' , component : AppComponent},
  {path : 'login', component : LoginComponent },
  {path : 'product', component : ProductComponent},
  {path : 'search', component : SearchComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
