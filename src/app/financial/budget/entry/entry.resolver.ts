import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Entry } from './entry';
import { EntryService } from './entry.service';

@Injectable({
  providedIn: 'root',
})
export class EntryResolver implements Resolve<Entry[]> {
  constructor(private entryService: EntryService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Entry[]> {
    console.log('Resolver');
    return this.entryService.list(new Date());
  }
}
