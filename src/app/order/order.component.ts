import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CartItem } from '../models/CartItem';
import { CommonModule } from '@angular/common';
import { delimiter } from 'path';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderForm = this.fb.group({
    name: ['', Validators.required],
    street: ['', Validators.required],
    apartment: [''],
    city: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^(\+381|0)[0-9]{8,12}$/)]],
    email: ['', [Validators.required, Validators.email]],
    notes: [''],
    deliveryDate: ['', Validators.required],
    deliveryTime: ['', Validators.required]
  });

  cartItems: CartItem[] = [];
  minDate: string='';
  isSubmitting: boolean = false;

  ngOnInit(): void {
      const storedItems = localStorage.getItem('cartItems');
      if (storedItems) {
        this.cartItems = JSON.parse(storedItems);
      }
      const today = new Date();
      today.setDate(today.getDate() + 2); 
      //this.minDate = today.toISOString().split('T')[0];
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      this.minDate = `${year}-${month}-${day}`
    }

  constructor(private fb: FormBuilder) {}

  get total(): number {
    let s = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
        s+= this.cartItems[i].price * this.cartItems[i].quantity;
    }
    return s;
  }

  sendViaEmail() {

     const templateParams = {
      name: this.orderForm.value.name,
      phone: this.orderForm.value.phone,
      address: this.orderForm.value.street,
      email: this.orderForm.value.email,
      municipality: this.orderForm.value.city,
    };

    emailjs.send('service_test', 'template_sqcn4n9', templateParams, 'mCINA6gfvjRf_iWje')
      .then((response) => {
        console.log('Email poslat!', response.status, response.text);
        alert('Uspešno poslato!');
        this.orderForm.reset();
      }, (error) => {
        console.error('Greška prilikom slanja emaila:', error);
        alert('Došlo je do greške, pokušajte ponovo.');
      });
       
    }

    sendOrderEmail() {
        const formValues = this.orderForm.value;

        const templateParams = {
          name: formValues.name,
          address: formValues.street,
          apartman: formValues.apartment || '',
          municipalicity: formValues.city,
          phone: formValues.phone,
          email: formValues.email,
          notes: formValues.notes || '',

          orders: this.cartItems.map(item => ({
            name: item.name,
            units: item.quantity,
            price: (item.price * item.quantity).toFixed(2),
          })),

          delivery: this.total>5000?0:300,
          total1: this.total.toFixed(2),
          total: this.total + (this.total>5000?0:300),
          date: formValues.deliveryDate,
          time: formValues.deliveryTime,
          payment: localStorage.getItem('payment')

        };

        emailjs.send(
          'pip_service',
          'template_s9c25v7',
          templateParams,
          'mCINA6gfvjRf_iWje'
        )
        .then(() => { alert('Porudžbina poslata!'); this.isSubmitting = false; })
        .catch(err => { console.error('Greška pri slanju:', err); this.isSubmitting = false; });

        localStorage.removeItem('cartItems');
        localStorage.removeItem('payment');
      }
      sendConfirmationEmail() {
        const formValues = this.orderForm.value;

         const templateParams = {
          name: formValues.name,
          address: formValues.street,
          apartman: formValues.apartment || '',
          municipalicity: formValues.city,
          phone: formValues.phone,
          email: formValues.email,
          notes: formValues.notes || '',

          orders: this.cartItems.map(item => ({
            name: item.name,
            units: item.quantity,
            price: (item.price * item.quantity).toFixed(2),
          })),

          delivery: this.total>5000?0:300,
          total1: this.total.toFixed(2),          
          total: this.total + (this.total>5000?0:300),
          date: formValues.deliveryDate,
          time: formValues.deliveryTime,
          payment: localStorage.getItem('payment')
        };

        emailjs.send(
          'confirm_service',
          'template_sqcn4n9',
          templateParams,
          'mCINA6gfvjRf_iWje'
        )
        .then(() => console.log('Confirmation email sent!'))
        .catch(err => console.error('Error sending confirmation email:', err));

      }
      onSubmit() {
            if (this.cartItems.length === 0) {
              alert('Vaša korpa je prazna. Dodajte proizvode pre nego što nastavite.');
              return;
            }


            if (this.orderForm.invalid) {
              this.orderForm.markAllAsTouched(); 
              return;
            }
            this.isSubmitting = true;
            this.sendOrderEmail();
            localStorage.clear();
      }
}








