import { Component, OnInit } from '@angular/core';

// Models
import { Product } from '../../models';
import { TableAction, TableColumns } from '@app/shared/modules/table/models';

// Constants
import { ACTION } from '@app/shared/modules/table/constants';
import {
  PRODUCTS_LIST_TABLE_ACTIONS,
  PRODUCTS_LIST_TABLE_COLUMNS,
} from '../../constants';

// Services
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProductComponent } from '../../components';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  productsColumn: TableColumns[] = PRODUCTS_LIST_TABLE_COLUMNS;
  productsActions: TableAction[] = PRODUCTS_LIST_TABLE_ACTIONS;

  loading: boolean = false;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }

  onEmitAction($event: { row: Product; type: string }): void {
    switch ($event.type) {
      case ACTION.EDIT:
        this.editProduct($event.row);
        break;
      case ACTION.DELETE:
        this.deleteProduct($event.row.id);
        break;
      default:
        return;
    }
  }

  addProject(): void {
    this.dialog
      .open(AddEditProductComponent, {
        width: '37.5rem',
        maxHeight: '80vh',
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.products = [res, ...this.products];
      });
  }

  editProduct(product: Product): void {
    this.dialog
      .open(AddEditProductComponent, {
        width: '37.5rem',
        maxHeight: '80vh',
        data: product,
      })
      .afterClosed()
      .subscribe((res: Product) => {
        if (res) {
          this.products = this.products.map((product) => {
            if (product.id === res.id) product = res;
            return product;
          });
        }
      });
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe({
      next: (res) => {
        this.loading = true;
        const productIndex = this.products.findIndex(
          (product) => product.id === id
        );
        this.products.splice(productIndex, 1);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
    });
  }
}
