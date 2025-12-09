import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; 
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CakeServiceService } from '../cake-service.service';
import { Cake } from '../models/Cake';
import { CartItem } from '../models/CartItem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, NgOptimizedImage, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

    cakeId:number = 0;
    cake: Cake = new Cake;
    photos: string [][] = [[
            'assets/dubai cizkejk/dubai1.webp',
            'assets/dubai cizkejk/dubai2.webp'
          ],
          [
            'assets/pistac cizkejk/pistac1.webp',
            'assets/pistac cizkejk/pistac2.webp',
            'assets/pistac cizkejk/pistac3.webp',
          ], 
          [
            'assets/jagoda cizkejk/jagoda1.webp',
            'assets/jagoda cizkejk/jagoda2.webp',
            'assets/jagoda cizkejk/jagoda3.webp',
          ],
          [
            'assets/malina cizkejk/malina1.webp',
            'assets/malina cizkejk/malina2.webp',
            'assets/malina cizkejk/malina3.webp',
            'assets/malina cizkejk/malina4.webp',
            'assets/malina cizkejk/malina5.webp'
          ],
          [
            'assets/borovnica cizkejk/borovnica1.webp',
            'assets/borovnica cizkejk/borovnica2.webp',
            'assets/borovnica cizkejk/borovnica4.webp',
            'assets/borovnica cizkejk/borovnica5.webp',
          ],
          [
            'assets/mango cizkejk/mango1.webp',
            'assets/mango cizkejk/mango2.webp',
          ],
          [
            'assets/borovnica mafin/borovnicamafin1.webp',
            'assets/borovnica mafin/borovnicamafin2.webp',
          ],
          [
             'assets/coko banana mafin/mafincokobanana.webp',
          ],
          [
             'assets/pistac bela cokolada mafin/pistacbela1.webp',
             'assets/pistac bela cokolada mafin/pistacbela2.webp',
             'assets/pistac bela cokolada mafin/pistacbela3.webp',
             'assets/pistac bela cokolada mafin/pistacbela4.webp',
          ],
          [
              'assets/pistac mafin/pistacmafin1.webp',
              'assets/pistac mafin/pistacmafin2.webp',
              'assets/pistac mafin/pistacmafin3.webp',
          ],
          [
              'assets/pistac crna cokolada mafin/pistaccrnacokolada1.webp',
              'assets/pistac crna cokolada mafin/pistaccrnacokolada2.webp'
          ],
          [
              'assets/karamela mafin/karamelamafin1.webp',
              'assets/karamela mafin/karamelamafin2.webp',
          ],
          [
              'assets/limun malina mafin/malinamafin1.webp',
              'assets/limun malina mafin/malinamafin2.webp',
          ],
          [
              'assets/rafaelo cizkejk/Rafaelo1.webp',
              'assets/rafaelo cizkejk/Rafaelo2.webp',
              'assets/rafaelo cizkejk/Rafaelo3.webp'
          ],
          [
              'assets/beli dubai/Belidubai1.webp',
              'assets/beli dubai/Belidubai2.webp',
          ],
          [
              'assets/bezglutenski/Bezgluten1.webp',
              'assets/bezglutenski/Bezgluten2.webp',
              'assets/bezglutenski/Bezgluten3.webp'
          ],
          [
              'assets/kokos mafin/kokosmafin.webp',
          ],
          [
              'assets/pistac coko banana/pistaccokobanana.webp',
          ],
          [
              'assets/pistac kuglice/pistackuglica1.webp',
              'assets/pistac kuglice/pistackuglica2.webp',
              'assets/pistac kuglice/pistackuglice3.webp',
          ],
          [
              'assets/badem kuglice/bademkuglica.webp',
          ],
          [
              'assets/orah kuglice/orahkuglica.webp',
          ],
          [
              'assets/lesnik kuglice/lesnikkuglica.webp',
          ],
          [
              'assets/kikiriki kuglice/kikirikikuglica1.webp',
              'assets/kikiriki kuglice/kikirikikuglica2.webp',
          ],
          [
              'assets/kajsija kuglice/kajsijakuglica1.webp',
              'assets/kajsija kuglice/kajsijakuglica.webp',
          ],
          [
              'assets/malina kuglice/malinakuglica1.webp',
              'assets/malina kuglice/malinakuglica2.webp',
          ],
          [
              'assets/borovnica kuglice/borovnicakuglica1.webp',
              'assets/borovnica kuglice/borovnicakuglica2.webp',
          ],
          [
              'assets/cvet smokva/cvetsmokva.webp',
              'assets/cvet smokva/cvetsmokva2.webp',
          ],
          [
              'assets/dubai urma/Dubaiurma.webp',
          ],
          [
              'assets/dubai srce/Dubaisrce.webp',
          ],
          [
              'assets/dubai krug/Dubaikrug.webp',
          ],
          [
              'assets/dubai kocka/Dubaikocka.webp',
          ],
          [
              'assets/coko mix/cokomix1.webp',
              'assets/coko mix/cokomix2.webp',
          ],
          [
              'assets/posni mix1/posnimix1.webp',
              'assets/posni mix1/bademkuglica.webp',
              'assets/posni mix1/lesnikkuglica.webp',
              'assets/posni mix1/orahkuglica.webp'
          ],
          [
              'assets/posni mix2/posnimix2.webp',
              'assets/posni mix2/borovnicakuglica1.webp',
              'assets/posni mix2/kajsijakuglica.webp',
              'assets/posni mix2/kikirikikuglica1.webp',
              'assets/posni mix2/malinakuglica1.webp',
          ],
    ];


    images: string [] = [];
    selectedImage: string =  '';//this.images[0];
    quantity: number = 1;
    source: string = '';

    constructor(private cakeService:CakeServiceService, private router:Router, private route: ActivatedRoute) {}
    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
              this.source = params['source'] || '';
              console.log('SOURCE:', this.source); // test
        });
        const storedId = localStorage.getItem('id');
        //localStorage.removeItem('id');
        this.cakeId = storedId ? Number(storedId) : 0;
        if (this.cakeId > 0) {
          this.cakeService.getCake(this.cakeId).subscribe(data => {
            this.cake = data;
        });
        console.log(this.cake.portions);
        this.images = this.photos[this.cakeId-1];
        this.selectedImage = this.images[0];
        if((this.cakeId > 6 && this.cakeId<14) || (this.cakeId>16 && this.cakeId<32)) {
        {
          this.quantity = 0.5;
        }
      }
    }
  }

    changeImage(img: string): void {
      this.selectedImage = img;
    }

    increaseQuantity(): void {
      if((this.cakeId > 6 && this.cakeId<14) || this.cakeId==17 || this.cakeId==18)
      {
        this.quantity += 0.1;
        this.quantity = Number(this.quantity.toFixed(1));
      }
      else if(this.cakeId > 18 && this.cakeId<32) {
        this.quantity += 0.5;
        this.quantity = Number(this.quantity.toFixed(1));
      }
      else {
        this.quantity++;
      }
    }

  decreaseQuantity(): void {
    if (this.quantity > 0.5) {
      if((this.cakeId > 6 && this.cakeId<14) || this.cakeId==17 || this.cakeId==18)
      {
        this.quantity -= 0.1;
        this.quantity = Number(this.quantity.toFixed(1));
      }
      else if(this.cakeId > 18 && this.cakeId<32) {
        this.quantity -= 0.5;
        this.quantity = Number(this.quantity.toFixed(1));
      }
      else if(this.quantity > 1){
        this.quantity--;
      }
    }
  }

  addToCart(): void {
  
            const item: CartItem = {
              id: this.cake.id, 
              name: this.cake.name,
              price: this.cake.price,
              quantity: this.quantity
            };
  
            const stored = localStorage.getItem('cartItems');
            let cart: CartItem[] = stored ? JSON.parse(stored) : [];
  
            const existing = cart.find(c => c.id === item.id);
            if (existing) {
              existing.quantity += item.quantity;
            } else {
              cart.push(item);
            }
  
            localStorage.setItem('cartItems', JSON.stringify(cart));
            alert(item.quantity + " x "+ item.name + " uspešno dodat u korpu");
          }
}
