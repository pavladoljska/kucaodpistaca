import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PistachioComponent } from './pistachio/pistachio.component';
import { CheesecakeComponent } from './cheesecake/cheesecake.component';
import { MuffinComponent } from './muffin/muffin.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { BitesComponent } from './bites/bites.component';
import { CreamComponent } from './cream/cream.component';
import { DubaiComponent } from './dubai/dubai.component';
import { LentenComponent } from './lenten/lenten.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'delivery', component: DeliveryComponent },
    { path: 'pistachio', component: PistachioComponent },
    { path: 'cheesecake', component: CheesecakeComponent},
    { path: 'muffin', component: MuffinComponent},
    { path: 'cart', component: CartComponent},
    { path: 'product', component: ProductComponent},
    { path: 'order', component: OrderComponent},
    { path: 'bites', component: BitesComponent},
    { path: 'cream', component: CreamComponent},
    { path: 'dubai', component: DubaiComponent},
    { path: 'lenten', component: LentenComponent}
];

