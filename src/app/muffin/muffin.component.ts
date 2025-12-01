import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { Cake } from '../models/Cake';
import { CartItem } from '../models/CartItem';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-muffin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage, RouterModule],
  templateUrl: './muffin.component.html',
  styleUrl: './muffin.component.css'
})
export class MuffinComponent {
    constructor(private router: Router) {}
        gotoProduct(event : Event) {
                    const cakeId = (event.target as HTMLButtonElement).value;
                    localStorage.setItem('id', cakeId);
                    this.router.navigate(['product'], { queryParams: { source: 'muffin' } });
    
              }
        gotoProduct1(id: number) {
                    localStorage.setItem('id', id.toString());
                    this.router.navigate(['product'], { queryParams: { source: 'muffin' } });
    
              }
        /*addToCart(): void {
          alert(`Molimo Vas poručite pozivom na +381631241788 ili porukom na instagramu`);
        }*/
        addToCart(id:number, name: string, price: number): void {

          const item: CartItem = {
            id: id, 
            name: name,
            price: price,
            quantity: 0.5
          };

          const stored = localStorage.getItem('cartItems');
          let cart: CartItem[] = stored ? JSON.parse(stored) : [];

          const existing = cart.find(c => c.id === item.id);
          if (existing) {
            existing.quantity += 0.5;
          } else {
            cart.push(item);
          }

          localStorage.setItem('cartItems', JSON.stringify(cart));
          alert(item.quantity + "kg x "+ item.name + " uspešno dodat u korpu");
        }
}
