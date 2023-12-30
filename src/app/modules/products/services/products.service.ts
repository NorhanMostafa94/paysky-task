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

  addProduct(product: Product): Observable<null> {
    return this.post('products', product);
  }

  editProduct(product: Product): Observable<null> {
    return this.put(`products/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<null> {
    return this.put(`products/${id}`, '');
  }
}
