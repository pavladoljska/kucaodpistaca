import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { CartItem } from '../models/CartItem';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cheesecake',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, NgOptimizedImage],
  templateUrl: './cheesecake.component.html',
  styleUrl: './cheesecake.component.css'
})
export class CheesecakeComponent {
    constructor(private router: Router) {}
    gotoProduct(event : Event) {
                const cakeId = (event.target as HTMLButtonElement).value;
                localStorage.setItem('id', cakeId.toString());
                console.log(cakeId);
                this.router.navigate(['product'], { queryParams: { source: 'cheesecake' } });

          }
    gotoProduct1(id: number) {
                    localStorage.setItem('id', id.toString());
                    this.router.navigate(['product'], { queryParams: { source: 'cheesecake' } });
              }
    /*addToCart(): void {
      alert(`Molimo Vas poručite pozivom na +381631241788 ili porukom na instagramu`);
    }*/
   addToCart(id:number, name: string, price: number): void {
   
             const item: CartItem = {
               id: id, 
               name: name,
               price: price,
               quantity: 1
             };
   
             const stored = localStorage.getItem('cartItems');
             let cart: CartItem[] = stored ? JSON.parse(stored) : [];
   
             const existing = cart.find(c => c.id === item.id);
             if (existing) {
               existing.quantity += 1;
             } else {
               cart.push(item);
             }
   
             localStorage.setItem('cartItems', JSON.stringify(cart));

             alert(item.quantity + " x "+ item.name + " uspešno dodat u korpu");
           }
}
