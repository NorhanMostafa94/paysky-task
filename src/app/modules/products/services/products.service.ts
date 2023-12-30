import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends HttpService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getProducts(): Observable<Product[]> {
    return this.get('products', '');
  }

  getCategories(): Observable<any[]> {
    return this.get('products/categories', '');
  }
}
