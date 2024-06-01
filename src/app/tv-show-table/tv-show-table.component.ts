import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodateShow } from '../episodate-show.interface';
import { LocalStorageService } from '../local-storage.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
})
export class TvShowTableComponent {
  tvShows = input<EpisodateShow[]>([]);
  constructor(private favoritesService: FavoritesService) {}

  addFavorite(show: EpisodateShow) {
    this.favoritesService.toggleFavorite(show);
  }
}
