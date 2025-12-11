import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Cake } from '../models/Cake';

export interface SizeOption {
  size: string;
  price: number;
  weight: number;
}

@Component({
  selector: 'app-size-selector-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Izaberite veličinu</h2>
    <mat-dialog-content>
      <div class="size-options">
        <div *ngFor="let option of sizeOptions" class="size-option">
          <button 
            (click)="selectSize(option)"
            class="size-button"
            [class.selected]="selectedSize === option.size">
            <span class="size-name">{{ option.size }}</span>
            <span class="size-price">{{ option.price }} RSD</span>
            <span class="size-weight">({{ option.weight }}g)</span>
          </button>
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Otkaži</button>
      <button mat-raised-button color="primary" (click)="onConfirm()" [disabled]="!selectedSize">
        Dodaj u korpu
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .size-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 20px 0;
    }
    
    .size-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border: 2px solid #ddd;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
    }
    
    .size-button:hover {
      border-color: #556041;
      background-color: #f5f5f0;
    }
    
    .size-button.selected {
      border-color: #556041;
      background-color: #cfb97d;
      color: white;
    }
    
    .size-name {
      font-weight: bold;
      min-width: 80px;
    }
    
    .size-price {
      margin: 0 20px;
      font-weight: bold;
    }
    
    .size-weight {
      color: #666;
      font-size: 0.9em;
    }
  `]
})
export class SizeSelectorDialogComponent {
  sizeOptions: SizeOption[] = [];
  selectedSize: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<SizeSelectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cake: Cake, sizes: SizeOption[] }
  ) {
    this.sizeOptions = data.sizes;
  }

  selectSize(option: SizeOption) {
    this.selectedSize = option.size;
  }

  onConfirm() {
    const selected = this.sizeOptions.find(s => s.size === this.selectedSize);
    this.dialogRef.close(selected);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
