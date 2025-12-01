import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DeliveryComponent } from '../delivery/delivery.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pistachio',
  standalone: true,
  imports: [HomeComponent, DeliveryComponent, HeaderComponent, FooterComponent],
  templateUrl: './pistachio.component.html',
  styleUrl: './pistachio.component.css'
})
export class PistachioComponent {

}
