import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

// Modules
import { SharedModule } from '@app/shared/shared.module';

// Pages
import { LoginComponent } from './pages';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '@app/core/store/auth/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@app/core/store/auth/auth.effects';
import { AuthService } from '@app/core/services/auth.service';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { LoggedInGuard } from '@app/core/guards/logged-in.guard';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

const PAGES = [LoginComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoggedInGuard,
    { provide: MAT_SNACK_BAR_DATA, useValue: {} },
  ],
})
export class AuthModule {}
