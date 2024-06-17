import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { CommonModule } from '@angular/common';
import { TvShowDetailsService } from '../tv-show-details.service';
import { TvShowDetails } from '../tv-show-details.interface';
import { FavoritesCardComponent } from '../favorites-card/favorites-card.component';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css'],
  standalone: true,
  imports: [TvShowTableComponent, CommonModule, FavoritesCardComponent],
})
export class FavoritesViewComponent {
  public tvShowDetails: TvShowDetails[];
  constructor(
    public favoritesService: FavoritesService,
    private detailsService: TvShowDetailsService
  ) {}
  ngOnInit() {
    this.getFavorites();
  }
  getFavorites() {
    this.detailsService.allShowDetails$.subscribe(
      (data) => (this.tvShowDetails = data)
    );
  }
}
