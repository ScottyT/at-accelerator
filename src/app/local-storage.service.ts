import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService<T> {
  get<T>(token: string): T {
    return JSON.parse(localStorage.getItem(token) ?? '[]') as T;
  }

  set<T>(token: string, config: T): void {
    localStorage.setItem(token, JSON.stringify(config));
  }
}
