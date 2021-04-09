import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';
import { BudgetComponent } from './budget/budget.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

@NgModule({
  declarations: [FinancialComponent, BudgetComponent, CreditCardComponent],
  exports: [FinancialComponent],
  imports: [CommonModule, FinancialRoutingModule, CoreModule],
})
export class FinancialModule {}
