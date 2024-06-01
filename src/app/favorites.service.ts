import { Injectable, effect, signal } from '@angular/core';
import { EpisodateShow } from './episodate-show.interface';
import { LocalStorageService } from './local-storage.service';
import { EpisodateService } from './episodate.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly localStorageKey = 'favorites';
  private favoritesList = signal<EpisodateShow[]>([]);
  constructor(
    private localStorageService: LocalStorageService<EpisodateShow[]>
  ) {
    const favorites = this.localStorageService.get<EpisodateShow[]>(
      this.localStorageKey
    );
    if (favorites !== null) {
      this.favoritesList.set(favorites);
    }
  }
  ngOnInit() {
    console.log(this.localStorageService.get(this.localStorageKey));
  }
  toggleFavorite(show: EpisodateShow) {
    let list = [show];
    console.log(list);
    this.localStorageService.set('favorites', list);
  }
  list = this.favoritesList.asReadonly();
}
