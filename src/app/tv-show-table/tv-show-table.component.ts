import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodateShow } from '../episodate-show.interface';
import { FavoritesService } from '../favorites.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
})
export class TvShowTableComponent {
  @Input()
  tvShows: EpisodateShow[] = [];
  constructor(protected favoritesService: FavoritesService) {}

  addFavorite(show: EpisodateShow) {
    this.favoritesService.toggleFavorite(show.id);
  }

  addHighlightClass(tvshow: EpisodateShow): boolean {
    return this.favoritesService
      .favorites()
      .map((x) => x)
      .includes(tvshow.id);
  }
}
