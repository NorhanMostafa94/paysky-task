import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { HeaderComponent } from './components';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

const COMPONENTS = [HeaderComponent, SnackbarComponent];

const ANGULAR_MATERIAL = [
  MatSidenavModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [...COMPONENTS, SnackbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...ANGULAR_MATERIAL,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...ANGULAR_MATERIAL,
  ],
  providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
})
export class SharedModule {}
