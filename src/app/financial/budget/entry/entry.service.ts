import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../../environments/environment.prod';
import { Entry } from './entry';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private endPoint = `${API}/entries`;

  constructor(private http: HttpClient) {}

  list(month: Date): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.endPoint);
  }
  create(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.endPoint, entry);
  }
  update(entry: Entry): Observable<Entry> {
    return this.http.put<Entry>(this.endPoint, entry);
  }
}
