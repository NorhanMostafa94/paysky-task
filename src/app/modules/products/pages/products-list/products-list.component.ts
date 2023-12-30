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

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  productsColumn: TableColumns[] = PRODUCTS_LIST_TABLE_COLUMNS;
  productsActions: TableAction[] = PRODUCTS_LIST_TABLE_ACTIONS;

  constructor(private productsService: ProductsService) {}

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
}
