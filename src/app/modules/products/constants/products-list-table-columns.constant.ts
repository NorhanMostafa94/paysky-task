import { TableColumns } from "@app/shared/modules/table/models";

export const PRODUCTS_LIST_TABLE_COLUMNS: TableColumns[] = [
  {
    type: 'text',
    display: 'ID',
    model: 'id',
  },
  {
    type: 'long-text',
    display: 'Title',
    model: 'title',
  },
  {
    type: 'text',
    display: 'Price',
    model: 'price',
  },
  {
    type: 'text',
    display: 'Category',
    model: 'category',
  },
  {
    type: 'long-text',
    display: 'Description',
    model: 'description',
  },
  {
    type: 'photo',
    display: 'Image',
    model: 'image',
  },
  {
    type: 'action',
    display: '',
    model: 'action',
  },
];
