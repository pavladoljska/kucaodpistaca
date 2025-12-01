import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PistachioComponent } from './pistachio/pistachio.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HomeComponent, HeaderComponent, FooterComponent, DeliveryComponent, PistachioComponent, CartComponent, ProductComponent],
  template: `
    <router-outlet></router-outlet>
  `
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kuca od pistaca';
}
