import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet, Router } from '@angular/router';
import { MuffinComponent } from '../muffin/muffin.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, MuffinComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

          constructor(private router: Router) {}
          gotoMuffin() {
                this.router.navigate(['muffin']);
          }
          gotoCheesecake() {
                this.router.navigate(['cheesecake']);
          }

}
