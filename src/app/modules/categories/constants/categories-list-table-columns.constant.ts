import { TableColumns } from '@app/shared/modules/table/models';

export const CATEGORIES_LIST_TABLE_COLUMNS: TableColumns[] = [
  {
    type: 'long-text',
    display: 'Name',
    model: 'name',
  },
  {
    type: 'action',
    display: '',
    model: 'action',
  },
];
