import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    SearchFilterPipe,
    UpdateproductComponent,
    ProductListComponent,
    ProductSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
