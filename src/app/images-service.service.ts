import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from './models/URL';

@Injectable({
  providedIn: 'root'
})
export class ImagesServiceService {

    private apiUrl = 'https://www.kucaodpistaca.rs/getImages.php';
  
    constructor(private http: HttpClient) {     
    }
    getImages(id:number) {
        return this.http.get<URL[]>(`${this.apiUrl}?id=${id}`);
    }
}
