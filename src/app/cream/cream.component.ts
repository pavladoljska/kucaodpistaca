import { Component } from '@angular/core';
import { CakeServiceService } from '../cake-service.service';
import { ImagesServiceService as ImagesService } from '../images-service.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { URL } from '../models/URL';
import { Cake } from '../models/Cake';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cream',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule, NgOptimizedImage],
  templateUrl: './cream.component.html',
  styleUrl: './cream.component.css'
})
export class CreamComponent {

  products: Cake[] = [];

  constructor(private cakeService: CakeServiceService, private imagesService: ImagesService, private router: Router) { }

  ngOnInit() {
    this.cakeService.getCreams().subscribe((data: Cake[]) => {
      this.products = data;
      
      this.products.forEach(cake => {
        this.imagesService.getImages(cake.id).subscribe((data: URL[]) => {
          cake.photos = data.map(urlObj => urlObj.url);
        });
      });
      console.log(this.products);
    });
  }

  gotoProduct(product: Cake) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['product'], { queryParams: { source: 'cream' } });
  }


}
