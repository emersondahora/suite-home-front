import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalErrorComponent } from './errors/global-error/globa-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'financial/budget',
  },
  {
    path: 'financial',
    loadChildren: () =>
      import('./financial/financial.module').then(
        (module) => module.FinancialModule
      ),
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not Found',
    },
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
    data: {
      title: 'Error',
    },
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
