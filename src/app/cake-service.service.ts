import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cake } from './models/Cake';

@Injectable({
  providedIn: 'root'
})
export class CakeServiceService {

  //private apiUrl = 'http://kucaodpistaca.rs/getCake.php';
  private apiUrl = 'https://www.kucaodpistaca.rs/getCake.php';

  constructor(private http: HttpClient) {     
  }
  getCake(id:number) {
      return this.http.get<Cake>(`${this.apiUrl}?id=${id}`);
  }
}
