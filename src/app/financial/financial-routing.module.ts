import { CreditCardComponent } from './credit-card/credit-card.component';
import { BudgetComponent } from './budget/budget.component';
import { FinancialComponent } from './financial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const financialChildren = [
  {
    path: 'budget',
    component: BudgetComponent,
    data: {
      title: 'Orçamento',
      tab: 'budget',
    },
  },
  {
    path: 'credit-card',
    component: CreditCardComponent,
    data: {
      title: 'Cartões',
      tab: 'credit-card',
    },
  },
];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'budget',
  },
  {
    path: '',
    component: FinancialComponent,
    // canActivate:[LoginGuard],
    children: financialChildren,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialRoutingModule {}
