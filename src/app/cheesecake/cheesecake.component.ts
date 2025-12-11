import { Component, ViewChild } from '@angular/core';
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
  selector: 'app-cheesecake',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, NgOptimizedImage, CommonModule],
  templateUrl: './cheesecake.component.html',
  styleUrl: './cheesecake.component.css'
})
export class CheesecakeComponent {
    products: Cake[] = [];
    selectedProduct: Cake | null = null;
    showSizeMenu: boolean = false;
  
    constructor(private cakeService: CakeServiceService, private imagesService: ImagesService, private router: Router) { }
  
    ngOnInit() {
      this.cakeService.getCheesecake().subscribe((data: Cake[]) => {
        this.products = data;
        
        this.products.forEach(cake => {
          this.imagesService.getImages(cake.id, cake.product_type).subscribe((data: URL[]) => {
            cake.photos = data.map(urlObj => urlObj.url);
          });
        });
      });
    }
  
    gotoProduct(product: Cake) {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      this.router.navigate(['product'], { queryParams: { source: 'cheesecake' } });
    }
  
      setSelectedProduct(product: Cake): void {
        this.selectedProduct = product;
      }
    
      toggleSizeMenu(product: Cake | null): void {
        if (product && product.id === this.selectedProduct?.id && this.showSizeMenu) {
          this.showSizeMenu = false;
        } else {
          this.selectedProduct = product;
          this.showSizeMenu = !!product;
        }
      }

      addToCartWithSize(product: Cake, size: string): void {
        let price: number = 0;
        let dimension: string = '';
        if(size === 's') {
          price = product.min_price!;
          dimension = 'mali';
        } else if(size === 'b') {
          price = product.price!;
          dimension = 'veliki';
        }
        const item: CartItem = {
          id: product.id,
          name: product.name + ' - ' + dimension,
          price: price,
          quantity: 1,
          photo: product.photos ? product.photos[0] : ''
        };
        
        const stored = localStorage.getItem('cartItems');
        let cart: CartItem[] = stored ? JSON.parse(stored) : [];
        
        const existing = cart.find(c => c.id === item.id && c.name === item.name);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push(item);
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cart));
        alert(item.quantity + " x "+ item.name + " uspešno dodat u korpu");
      }
}
