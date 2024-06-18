import { Injectable, effect, signal } from '@angular/core';
import { TvShowId, TvShowIds } from './episodate-show.interface';
import { LocalStorageService } from './local-storage.service';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly localStorageKey = 'favorites';
  public favoritesList = signal<TvShowIds>(
    this.localStorageService.get(this.localStorageKey)
  );
  readonly favorites = this.favoritesList.asReadonly();
  public favorites$ = toObservable(this.favoritesList);
  constructor(private localStorageService: LocalStorageService<TvShowIds>) {
    effect(() =>
      this.localStorageService.set(this.localStorageKey, this.favoritesList())
    );
  }

  toggleFavorite(id: TvShowId) {
    const index = this.favoritesList().indexOf(id);
    if (index !== -1) {
      this.favoritesList.update((favorites) =>
        favorites.filter((tvshow) => tvshow !== id)
      );
    } else {
      this.favoritesList.update((favorites) => [id, ...favorites]);
    }
  }
}
