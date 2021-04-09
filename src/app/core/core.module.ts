import { LoadingModule } from './../shared/components/loading/loading.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [HeaderComponent, MainContentComponent],
  exports: [HeaderComponent, MainContentComponent],
  imports: [
    RouterModule,
    CommonModule,
    AlertModule,
    LoadingModule
  ]
})
export class CoreModule { }
