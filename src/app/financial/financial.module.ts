import { BudgetModule } from './budget/budget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './../core/core.module';
import { FormatCurrencyModule } from '../shared/pipe/format-currency/format-currency/format-currency.module';

import { FinancialComponent } from './financial.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FinancialRoutingModule } from './financial-routing.module';

@NgModule({
  declarations: [FinancialComponent,  CreditCardComponent],
  imports: [
    CommonModule,
    CoreModule,
    FinancialRoutingModule,
    BudgetModule
  ],
})
export class FinancialModule {}
