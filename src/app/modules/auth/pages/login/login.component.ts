import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Store
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store';
import { AuthActions } from '@app/core/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  initiateLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.initiateLoginForm();
  }

  submitLogin(): void {
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      this.store.dispatch(AuthActions.login({ payload }));
    }
  }
}
