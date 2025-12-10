import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cake } from './models/Cake';
import { Cream } from './models/Cream';

@Injectable({
  providedIn: 'root'
})
export class CakeServiceService {

  //private apiUrl = 'http://kucaodpistaca.rs/getCake.php';
  private apiUrl = 'https://www.kucaodpistaca.rs/getCake.php';
  private productApiUrl = 'https://www.kucaodpistaca.rs/getProducts.php';

  constructor(private http: HttpClient) {     
  }
  getCake(id:number) {
      return this.http.get<Cake>(`${this.apiUrl}?id=${id}`);
  }

  getCreams() {
      return this.http.get<Cake[]>(`${this.productApiUrl}?type=cream`);
  }
  getDubais() {
      return this.http.get<Cake[]>(`${this.productApiUrl}?type=dubai`);
  }
  getBites() {
      return this.http.get<Cake[]>(`${this.productApiUrl}?type=bites`);
  }
}
