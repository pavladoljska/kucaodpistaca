import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Cake } from '../models/Cake';

export interface SizeOption {
  size: string;
  price: number;
  weight: number;
}

@Component({
  selector: 'app-size-selector-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  template: `
    <button 
      mat-raised-button 
      [matMenuTriggerFor]="sizeMenu"
      class="add-to-cart-btn">
      <i class="fas fa-shopping-cart"></i> Dodaj u korpu
    </button>

    <mat-menu #sizeMenu="matMenu" class="size-menu">
      <div class="menu-header">
        <span>Izaberite veličinu</span>
      </div>
      <button 
        mat-menu-item 
        *ngFor="let option of sizeOptions"
        (click)="selectSize(option)"
        class="size-menu-item">
        <span class="size-name">{{ option.size }}</span>
        <span class="size-price">{{ option.price }} RSD</span>
        <span class="size-weight">({{ option.weight }}g)</span>
      </button>
    </mat-menu>
  `,
  styles: [`
    .add-to-cart-btn {
      background-color: #909634;
      color: #cfb97d;
      font-weight: bold;
      width: 100%;
      margin-top: 10px;
    }

    .add-to-cart-btn:hover {
      background-color: #7a7a2a;
    }

    :host ::ng-deep .size-menu {
      min-width: 300px !important;
    }

    :host ::ng-deep .menu-header {
      display: block;
      padding: 12px 16px;
      font-weight: bold;
      color: #556041;
      border-bottom: 1px solid #e0e0e0;
      background-color: #f5f5f0;
    }

    :host ::ng-deep .size-menu-item {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px !important;
      width: 100%;
    }

    .size-name {
      font-weight: bold;
      min-width: 80px;
    }

    .size-price {
      margin: 0 20px;
      font-weight: bold;
      color: #556041;
    }

    .size-weight {
      color: #999;
      font-size: 0.9em;
    }
  `]
})
export class SizeSelectorMenuComponent {
  sizeOptions: SizeOption[] = [];
  selectedOption: SizeOption | null = null;
  onSizeSelected?: (option: SizeOption) => void;

  setSizeOptions(sizes: SizeOption[]) {
    this.sizeOptions = sizes;
  }

  selectSize(option: SizeOption) {
    this.selectedOption = option;
    if (this.onSizeSelected) {
      this.onSizeSelected(option);
    }
  }
}
