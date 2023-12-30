import { ACTION } from '@app/shared/modules/table/constants';
import { TableAction } from '@app/shared/modules/table/models';

export const PRODUCTS_LIST_TABLE_ACTIONS: TableAction[] = [
  {
    display: 'View',
    type: ACTION.VIEW,
    icon: 'remove_red_eye',
  },
  {
    display: 'Edit',
    type: ACTION.EDIT,
    icon: 'edit',
  },
  {
    display: 'Delete',
    type: ACTION.DELETE,
    icon: 'delete',
  },
];
