import { HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModule } from '../models/productResponseModel'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient); // Angular 14 ve üstü için inject() kullanımı
  apiUrl = 'https://localhost:44314/api/products/getall';

  getProducts(): Observable<ProductResponseModule> {
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}
