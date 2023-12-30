import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends HttpService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getCategories(): Observable<string[]> {
    return this.get('products/categories', '');
  }

  addCategory(category: string): Observable<null> {
    return this.post('categories', category);
  }

  editCategory(category: string): Observable<null> {
    return this.put(`categories/${category}`, category);
  }

  deleteCategory(category: string): Observable<null> {
    return this.put(`categories/${category}`, '');
  }
}
