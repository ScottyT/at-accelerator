import { Component, Signal, computed } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { EpisodateShow } from '../episodate-show.interface';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-view',
  standalone: true,
  templateUrl: './favorites-view.component.html',
  imports: [TvShowTableComponent, CommonModule],
  styleUrls: ['./favorites-view.component.css'],
})
export class FavoritesViewComponent {
  protected data: Signal<EpisodateShow[]>;
  constructor(public favoritesService: FavoritesService) {}
  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.data = this.favoritesService.list;
  }
}
