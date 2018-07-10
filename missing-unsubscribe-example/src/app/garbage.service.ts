import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarbageService {
  get data$(): Observable<number> {
    return this._data$.asObservable();
  }
  private _data$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  triggerNewMessage() {
    this._data$.next(this._data$.getValue() + 1);
  }
}
