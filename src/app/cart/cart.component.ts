import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // opcionalno
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  couponCode = '';
  discount = 0;
  

  constructor(private router: Router) {}
  images: { [key: string]: string } = {
       '1' : '/assets/webp/dubaibezpozadine.webp',
       '2' : '/assets/webp/pistaccizkejkbezpozadine.webp',
       '3' :'/assets/webp/jagodabezpozadine.webp',
       '4' : '/assets/webp/cizkejkmalinabezpozadine.webp',
       '5' :'/assets/webp/cizkejkborovnicabezpozadine.webp',
       '6' :'/assets/webp/mangobezpozadine.webp',
       '7' :'/assets/webp/mafinborovnicabezpozadine.webp',
       '8' :'/assets/webp/mafincokobananabezpozadine.webp',
       '9' :'/assets/webp/mafinpistacbelacokoladabezpozadine.webp',
       '10':'/assets/webp/mafinpistacbezpozadine.webp',
       '11':'/assets/webp/mafinpistaccrnacokoladabezpozadine.webp',
       '12':'/assets/webp/mafinkaramelabezpozadine.webp',
       '13':'/assets/webp/mafinmalinabezpozadine.webp',
       '14':'/assets/rafaelo cizkejk/Rafaelo bezpozadine.webp',
       '15':'/assets/beli dubai/Belidubai bezpozadine.webp',
       '16':'/assets/bezglutenski/Bezgluten bezpozadine.webp',
       '17':'/assets/kokos mafin/kokosmafin bezpozadine.webp',
       '18':'/assets/pistac coko banana/Pistaccokobanana bezpozadine.webp',
       '19':'/assets/pistac kuglice/pistackuglicabezpozadine.webp',
       '20':'/assets/badem kuglice/bademkuglicabezpozadine.webp',
       '21':'/assets/orah kuglice/orahkuglicabezpozadine.webp',
       '22':'/assets/lesnik kuglice/lesnikkuglicabezpozadine.webp',
       '23':'/assets/kikiriki kuglice/kikirikikuglicabezpozadine.webp',
       '24':'/assets/kajsija kuglice/kajsijakuglicabezpozadine.webp',
       '25':'/assets/malina kuglice/malinakuglicabezpozadine.webp',
        '26':'/assets/borovnica kuglice/borovnicakuglicabezpozadine.webp',
        '27':'/assets/cvet smokva/cvetsmokvabezpozadine.webp',
        '28':'/assets/dubai urma/Dubaiurma bezpozadine.webp',
        '29':'/assets/dubai srce/Dubaisrce bezpozadine.webp',
        '30':'/assets/dubai krug/Dubaikrug bezpozadine.webp',
        '31':'/assets/dubai kocka/Dubaikocka bezpozadine.webp',
        '32':'/assets/coko mix/cokomix bezpozadine.webp',
        '33':'/assets/posni mix1/posnimix1 bezpozadine.webp',
        '34':'/assets/posni mix2/posnimix2 bezpozadine.webp',
    };


    paymentOptions = ['Plaćanje pouzećem', 'Uplata na račun'];
    selectedPayment: string = this.paymentOptions[0];

    ngOnInit(): void {
      const storedItems = localStorage.getItem('cartItems');
      if (storedItems) {
        this.cartItems = JSON.parse(storedItems);
      }
    }

    get total(): number {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ) - this.discount;
    }

    get totalWithShipping(): number {
      if(this.total >0)
        return this.total + (this.total>=5000?0:300);
      else 
        return 0;
    }

    applyCoupon(): void {
      if (this.couponCode === 'POPUST10') {
        this.discount = this.total * 0.1;
      } else {
        this.discount = 0;
      }
    }

    removeItem(item: CartItem): void {
      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
    order() : void {
      localStorage.setItem('payment', JSON.stringify(this.selectedPayment));
      this.router.navigate(['order']);
    }
    isKgItem(id: string): boolean {
      return id > '6';
    }
}
