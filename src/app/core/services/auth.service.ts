// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Services
import { HttpService } from '../services/http.service';

// Models
import { User } from '../../shared/models';

@Injectable()
export class AuthService extends HttpService {
  constructor(private httpClient: HttpClient, private router: Router) {
    super(httpClient);
    const profile: string | null = localStorage.getItem('profile');
  }

  /**
   * Check if user authenticated
   * @returns boolean
   */
  isAuthenticated(): boolean {
    const profile: string | null = localStorage.getItem('profile');
    return profile ? true : false;
  }

  /**
   * Get logged in user profile
   * @returns
   */
  getProfile(): Observable<User> {
    return this.get<User>('users/1', null).pipe(map((res: User) => res));
  }

  /**
   * Login for production use
   * @param username
   * @param password
   * @returns
   */
  login(username: string, password: string): Observable<any> {
    return this.post<{ data: { access_token: string } }>(`auth/login`, {
      username,
      password,
    });
  }
}
