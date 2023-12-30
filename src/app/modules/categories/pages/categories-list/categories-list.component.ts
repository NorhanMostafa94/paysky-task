import { Component } from '@angular/core';
import { TableAction, TableColumns } from '@app/shared/modules/table/models';
import {
  CATEGORIES_LIST_TABLE_ACTIONS,
  CATEGORIES_LIST_TABLE_COLUMNS,
} from '../../constants';
import { CategoriesService } from '../../services/categories.service';
import { ACTION } from '@app/shared/modules/table/constants';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from '../../components';
import { Category } from '../../models';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent {
  categories: Category[] = [];
  categoriesColumn: TableColumns[] = CATEGORIES_LIST_TABLE_COLUMNS;
  categoriesActions: TableAction[] = CATEGORIES_LIST_TABLE_ACTIONS;

  loading: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories.map((category) => {
          return {
            id: category,
            name: category,
          };
        });
      },
    });
  }

  onEmitAction($event: { row: string; type: string }): void {
    switch ($event.type) {
      case ACTION.EDIT:
        this.editCategory($event.row);
        break;
      case ACTION.DELETE:
        this.deleteCategory($event.row);
        break;
      default:
        return;
    }
  }

  addCategory(): void {
    this.dialog
      .open(AddEditCategoryComponent, {
        width: '37.5rem',
        maxHeight: '80vh',
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.categories = [res, ...this.categories];
      });
  }

  editCategory(category: string): void {
    this.dialog
      .open(AddEditCategoryComponent, {
        width: '37.5rem',
        maxHeight: '80vh',
        data: category,
      })
      .afterClosed()
      .subscribe((res: Category) => {
        if (res) {
          this.categories = this.categories.map((category) => {
            if (category.id === res.id) category = res;
            return category;
          });
        }
      });
  }

  deleteCategory(category: string): void {
    this.loading = true;
    const categoryIndex = this.categories.findIndex(
      (category) => (category = category)
    );
    this.categories.splice(categoryIndex, 1);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
