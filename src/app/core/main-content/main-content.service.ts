import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MainContentTab } from './main-content';

@Injectable({
  providedIn: 'root',
})
export class MainContentService {
  tabActiveSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  setActiveTab(tabActive: string): void {
    if (tabActive) {
      this.tabActiveSubject.next(tabActive);
    }
  }

  getActiveTab(): Observable<string> {
    return this.tabActiveSubject.asObservable();
  }
}
