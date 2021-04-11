import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BudgetComponent } from './budget.component';
import { FormatCurrencyModule } from 'src/app/shared/pipe/format-currency/format-currency/format-currency.module';

import { EntryFormComponent } from './entry-form/entry-form.component';
@NgModule({
  imports: [CommonModule, FormsModule, FormatCurrencyModule, ReactiveFormsModule],
  declarations: [BudgetComponent, EntryFormComponent],
  exports: [BudgetComponent],
})
export class BudgetModule {}
