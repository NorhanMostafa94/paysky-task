import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Models
import { Product } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { SnackbarService } from '@app/shared/components/snackbar/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  form!: FormGroup;

  categoriesList: string[] = [];

  mode: 'add' | 'edit' = 'add';

  subscriptions: Subscription[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private fb: FormBuilder,
    private productsService: ProductsService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    if (this.data) this.mode = 'edit';
    else this.mode = 'add';
    this.getCategoriesList();
  }

  initiateForm(): void {
    this.form = this.fb.group({
      title: [this.data?.title, [Validators.required]],
      price: [this.data?.price, [Validators.required]],
      description: [this.data?.description, [Validators.required]],
      image: [this.data?.image, [Validators.required]],
      category: [this.data?.category, [Validators.required]],
    });
  }

  getCategoriesList(): void {
    const sub = this.productsService.getCategories().subscribe({
      next: (categories) => {
        this.categoriesList = categories;
        this.initiateForm();
      },
    });
    this.subscriptions.push(sub);
  }

  submit(): void {
    if (this.form.valid) {
      const payload = { ...this.form.value, id: this.data?.id };
      if (this.mode === 'add') this.addProduct(payload);
      else this.editPtoduct(payload);
    }
  }

  addProduct(product: Product): void {
    const sub = this.productsService.addProduct(product).subscribe({
      next: () => {
        this.snackbar.openSnackBarSuccess('Prodcuct added successfully');
        this.close(product);
      },
    });
    this.subscriptions.push(sub);
  }

  editPtoduct(product: Product): void {
    const sub = this.productsService.editProduct(product).subscribe({
      next: () => {
        this.snackbar.openSnackBarSuccess('Prodcuct updated successfully');
        this.close(product);
      },
    });
    this.subscriptions.push(sub);
  }

  close(product?: Product): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.dialogRef.close(product);
  }
}
