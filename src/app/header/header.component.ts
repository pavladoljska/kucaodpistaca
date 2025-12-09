import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
        @Input() backgroundColor = 'rgba(230, 224, 217, 0.7)'; 
        menuOpen = false;
        constructor(private router: Router) {}
      
        languageMenuOpen = false;
        selectedLanguage = 'SR';

        toggleMenu() {
          this.menuOpen = !this.menuOpen;
        }

        toggleLanguageMenu() {
          this.languageMenuOpen = !this.languageMenuOpen;
        }

        closeLanguageMenu() {
          // zakasni malo da klik na opciju ne bude odmah zatvoren
          setTimeout(() => this.languageMenuOpen = false, 100);
        }

        setLanguage(lang: string) {
          this.selectedLanguage = lang;
          this.languageMenuOpen = false;
        }
      }
