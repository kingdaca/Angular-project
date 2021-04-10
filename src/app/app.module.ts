import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ModelsComponent } from './models/models.component';
import { RegisterComponent } from './register/register.component';
import { ModelsTableComponent } from './models-table/models-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import {CookieService} from 'ngx-cookie-service';
import { UserTabelComponent } from './user-tabel/user-tabel.component';
import { TableOrderComponent } from './table-order/table-order.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AddModelComponent } from './add-model/add-model.component';
import { AddMarkComponent } from './add-mark/add-mark.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { SearchfilterPipe } from './searchfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    ModelsComponent,
    RegisterComponent,
    ModelsTableComponent,
    AddProductComponent,
    UserTabelComponent,
    TableOrderComponent,
    OrderComponent,
    ProductComponent,
    ProfileComponent,
    MyProductsComponent,
    MyOrderComponent,
    AddModelComponent,
    AddMarkComponent,
    TableProductsComponent,
    SearchfilterPipe,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'models', component: ModelsComponent},
      {path: 'tableModels', component: ModelsTableComponent},
      {path: 'addCar', component: AddProductComponent},
      {path: 'userTable', component: UserTabelComponent},
      {path: 'models/:id', component: ProductComponent},
      {
        path: 'profile', component: ProfileComponent
        , children: [
          {path: 'myProducts', component: MyProductsComponent},
          {path: 'myOrder', component: MyOrderComponent},
        ]
      },
      {path: 'addModel', component: AddModelComponent},
      {path: 'addMark', component: AddMarkComponent},
      {path: 'tableProducts', component: TableProductsComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent],



})
export class AppModule { }
