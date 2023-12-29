import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export class HttpService {
  private _baseUrl: string;

  constructor(public httpClientInst: HttpClient, private baseUrl?: string) {
    this._baseUrl = baseUrl || environment.baseUrl;
  }

  protected get<T>(path: string, params: any): Observable<T> {
    return this.httpClientInst.get<T>(`${this.baseUrl}/${path}`, { params });
  }

  protected post<T>(path: string, payload: any, params?: any): Observable<T> {
    return this.httpClientInst.post<T>(`${this._baseUrl}/${path}`, payload, { params });
  }
}
