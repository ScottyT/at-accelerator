import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
@Injectable({ providedIn: 'root' })
export class LocalStorageService<T> {
  storage = toSignal(fromEvent(window, 'favorites'));

  dataSignal = signal<T>([] as T);

  get<T>(token: string): T | null {
    const settings = localStorage.getItem(token);
    console.log(settings);
    if (settings !== null) {
      return JSON.parse(settings);
    }
    return null;
  }

  set<T>(token: string, config: T): void {
    localStorage.setItem(token, JSON.stringify(config));
  }
}
