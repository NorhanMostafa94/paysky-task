import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { Category } from '../../models';

// Services
import { SnackbarService } from '@app/shared/components/snackbar/snackbar.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent implements OnInit {
  form!: FormGroup;

  categoriesList: string[] = [];

  mode: 'add' | 'edit' = 'add';


  constructor(
    public dialogRef: MatDialogRef<AddEditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    if (this.data) this.mode = 'edit';
    else this.mode = 'add';
    this.initiateForm();
  }

  initiateForm(): void {
    this.form = this.fb.group({
      name: [this.data?.name, [Validators.required]],
    });
  }

  submit(): void {
    if (this.form.valid) {
      const payload = { ...this.form.value, id: this.data?.id };
      if (this.mode === 'add') this.addCategory(payload);
      else this.editCategory(payload);
    }
  }

  addCategory(category: string): void {
    this.snackbar.openSnackBarSuccess('Category added successfully');
    this.close(category);
  }

  editCategory(category: string): void {
    this.snackbar.openSnackBarSuccess('Category updated successfully');
    this.close(category);
  }

  close(category?: string): void {
    this.dialogRef.close(category);
  }
}
