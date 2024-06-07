import { Injectable, effect, signal } from '@angular/core';
import { EpisodateShow } from './episodate-show.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly localStorageKey = 'favorites';
  private favoritesList = signal<EpisodateShow[]>(
    this.localStorageService.get(this.localStorageKey)
  );
  readonly favorites = this.favoritesList.asReadonly();
  constructor(
    private localStorageService: LocalStorageService<EpisodateShow[]>
  ) {
    effect(() =>
      this.localStorageService.set(this.localStorageKey, this.favoritesList())
    );
  }

  toggleFavorite(show: EpisodateShow) {
    const index = this.favoritesList()
      .map((x) => x.id)
      .indexOf(show.id);
    if (index !== -1) {
      this.favoritesList.update((favorites) =>
        favorites.filter((tvshow) => tvshow.id !== show.id)
      );
    } else {
      this.favoritesList.update((favorites) => [...favorites, show]);
    }
  }
}