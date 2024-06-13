import { Component, Input, input } from '@angular/core';
import { EpisodateShow, FavoritesList } from '../episodate-show.interface';
import { TvShowDetails } from '../tv-show-details.interface';
import { TvShowDetailsService } from '../tv-show-details.service';

@Component({
  selector: 'app-favorites-card',
  standalone: true,
  imports: [],
  templateUrl: './favorites-card.component.html',
  styleUrl: './favorites-card.component.css',
})
export class FavoritesCardComponent {
  @Input() tvShowId: number;
  favorite: FavoritesList = {
    name: '',
    image: '',
    next_episode_date: new Date(),
  };
  constructor(private detailsService: TvShowDetailsService) {}

  ngOnInit() {
    this.detailsService
      .getShowDetails(this.tvShowId.toString())
      .subscribe((data) => {
        this.favorite = {
          name: data.name,
          image: data.image_thumbnail_path,
          next_episode_date: data.countdown?.air_date,
        };
      });
  }
}
