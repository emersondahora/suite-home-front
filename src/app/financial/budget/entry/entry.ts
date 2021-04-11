import { EntryType } from './entry-type.enum';

export interface Entry {
  id?: string;
  description: string;
  amount: number;
  month: Date;
  expectedDate: Date;
  type: EntryType;
  amountDefined: boolean;
  accomplished: boolean;
}
