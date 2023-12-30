import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { Observable, catchError, throwError } from 'rxjs';

export class HttpService {
  private _baseUrl: string;

  constructor(public httpClientInst: HttpClient, private baseUrl?: string) {
    this._baseUrl = baseUrl || environment.baseUrl;
  }

  protected get<T>(path: string, params: any): Observable<T> {
    return this.httpClientInst
      .get<T>(`${this._baseUrl}/${path}`, { params })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected post<T>(path: string, payload: any, params?: any): Observable<T> {
    return this.httpClientInst
      .post<T>(`${this._baseUrl}/${path}`, payload, {
        params,
      })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected put<T>(path: string, payload: any, params?: any): Observable<T> {
    return this.httpClientInst
      .put<T>(`${this._baseUrl}/${path}`, payload, {
        params,
      })
      .pipe(catchError((error) => this.handleError(error)));
  }

  protected delete<T>(path: string, params?: any): Observable<T> {
    return this.httpClientInst
      .delete<T>(`${this._baseUrl}/${path}`, {
        params,
      })
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Something went wrong, try again later!`;
    }

    return throwError(err);
  }
}
