import { Component, Signal, computed } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { EpisodateShow } from '../episodate-show.interface';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css'],
  standalone: true,
  imports: [TvShowTableComponent, CommonModule],
})
export class FavoritesViewComponent {
  protected data: Signal<EpisodateShow[]>;
  constructor(public favoritesService: FavoritesService) {}
  ngOnInit() {
    this.getFavorites();
  }
  getFavorites() {
    this.data = this.favoritesService.favorites;
  }
}
