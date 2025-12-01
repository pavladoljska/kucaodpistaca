import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-bites',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './bites.component.html',
  styleUrls: ['./bites.component.css']
})
export class BitesComponent {
  constructor(private router: Router) {}

 

          gotoProduct1(id: number) {
                    localStorage.setItem('id', id.toString());
                    this.router.navigate(['product'], { queryParams: { source: 'bites' } });
              }
          gotoProduct(event : Event) {
                const cakeId = (event.target as HTMLButtonElement).value;
                localStorage.setItem('id', cakeId.toString());
                console.log(cakeId);
                this.router.navigate(['product'], { queryParams: { source: 'bites' } });

          }
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
