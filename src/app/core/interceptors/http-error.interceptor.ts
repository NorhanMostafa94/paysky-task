import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { SnackbarService } from '@app/shared/components/snackbar/snackbar.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snackbarService: SnackbarService) {}

  getErrorMessage = (err: HttpErrorResponse): string => {
    let message = err.error ?? 'Something went wrong, try again later!';
    return message;
  };

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let message = this.getErrorMessage(err);

        this.snackbarService.openSnackBarFailure(message);

        return throwError(err);
      })
    );
  }
}
