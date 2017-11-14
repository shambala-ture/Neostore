import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { HomeService } from './home/home.service';
import { ProductCategoryService } from './product-category/product-category.service';
import { ProductDetailService } from './product-detail/product-detail.service';
import { ProductService } from './product/product.service';
import { ColorService } from './product/color.service';

import { StarRatingModule } from 'angular-star-rating';

const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCategoryComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(
    routes,
    {enableTracing:false}
    )
  ],
  providers: [HomeService,ProductCategoryService,ProductDetailService,ProductService,ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
