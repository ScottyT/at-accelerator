import { Component } from '@angular/core';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { CommonModule } from '@angular/common';
import { TvShowDetailsService } from '../tv-show-details.service';
import { FavoritesCardComponent } from '../favorites-card/favorites-card.component';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css'],
  standalone: true,
  imports: [TvShowTableComponent, CommonModule, FavoritesCardComponent],
})
export class FavoritesViewComponent {
  protected tvShowDetails = this.detailsService.allShowDetails$;
  constructor(private detailsService: TvShowDetailsService) {}
}
