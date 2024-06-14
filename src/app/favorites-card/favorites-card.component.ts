import { Component, Input, input } from '@angular/core';
import { EpisodateShow, FavoritesList } from '../episodate-show.interface';
import { TvShowDetails } from '../tv-show-details.interface';
import { TvShowDetailsService } from '../tv-show-details.service';
import { FavoritesService } from '../favorites.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-favorites-card',
  standalone: true,
  imports: [],
  templateUrl: './favorites-card.component.html',
  styleUrl: './favorites-card.component.css',
})
export class FavoritesCardComponent {
  @Input() tvShow: FavoritesList;
  favorite: FavoritesList = {
    id: 0,
    name: '',
    image: '',
    next_episode_date: '',
    status: '',
  };
  details: TvShowDetails;
  constructor(private detailsService: TvShowDetailsService) {}

  ngOnInit() {
    // this.detailsService
    //   .getShowDetails(this.tvShowId.toString())
    //   .subscribe((data) => {
    //     this.favorite = {
    //       id: data.id,
    //       name: data.name,
    //       image: data.image_thumbnail_path,
    //       next_episode_date: data.countdown?.air_date,
    //     };
    //   });
  }
}
