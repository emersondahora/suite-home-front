import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/globa-error.component';
import { GlobalErrorHandler } from './global-error-handle/global-error-handle';

@NgModule({
  declarations: [NotFoundComponent, GlobalErrorComponent],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class ErrorsModule {}
