import { Component } from '@angular/core';
import { CakeServiceService } from '../cake-service.service';
import { ImagesServiceService as ImagesService } from '../images-service.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { URL } from '../models/URL';
import { Cake } from '../models/Cake';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-dubai',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HeaderComponent, FooterComponent],
  templateUrl: './dubai.component.html',
  styleUrl: './dubai.component.css'
})
export class DubaiComponent {


  products: Cake[] = [];
  
    constructor(private cakeService: CakeServiceService, private imagesService: ImagesService, private router: Router) { }
  
    ngOnInit() {
      this.cakeService.getDubais().subscribe((data: Cake[]) => {
        this.products = data;
        
        this.products.forEach(cake => {
          this.imagesService.getImages(cake.id, cake.product_type).subscribe((data: URL[]) => {
            cake.photos = data.map(urlObj => urlObj.url);
            console.log(cake.photos);
          });
        });
      });
    }
  
    gotoProduct(product: Cake) {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      this.router.navigate(['product'], { queryParams: { source: 'cream' } });
    }
  
    addToCart1(product: Cake): void {
       
        const item: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          photo: product.photos ? product.photos[0] : ''
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
