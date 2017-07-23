import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { FuctionComponent } from './fuction/fuction.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RoleComponent, UserComponent, FuctionComponent, ProductCategoryComponent, ProductComponent, HomeComponent]
})
export class MainModule { }
