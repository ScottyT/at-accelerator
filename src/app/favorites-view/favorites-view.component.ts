import { Component, Signal, computed } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { EpisodateShow, FavoritesList } from '../episodate-show.interface';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { CommonModule } from '@angular/common';
import { TvShowDetailsService } from '../tv-show-details.service';
import { Observable, concatMap, map, mergeMap, shareReplay } from 'rxjs';
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
  favoritesList: FavoritesList[] = [];
  public tvShowDetails$: Observable<TvShowDetails>;
  constructor(
    public favoritesService: FavoritesService,
    private detailsService: TvShowDetailsService
  ) {}
  ngOnInit() {
    this.getFavorites();
  }
  getFavorites() {
    this.favoritesService.favorites$
      .pipe(
        map((x) => {
          return x.sort((a: EpisodateShow, b: EpisodateShow) => {
            if (a.status > b.status) return -1;
            if (a.status < b.status) return 1;
            return 0;
          });
        }),
        concatMap((data) => data),
        mergeMap((data) =>
          this.detailsService.getShowDetails(data.id.toString())
        ),
        shareReplay(1)
      )
      .subscribe((res) => {
        this.favoritesList.push({
          name: res.name,
          id: res.id,
          next_episode_date: res.countdown?.air_date,
          image: res.image_path,
          status: res.status,
        });
        this.favoritesList.sort((a: FavoritesList, b: FavoritesList) => {
          if (a.next_episode_date > b.next_episode_date) return -1;
          if (a.next_episode_date < b.next_episode_date) return 1;
          return 0;
        });
      });
    //this.favorites$ = toObservable(this.favoritesService.favorites);
    // forkJoin([
    //   this.favorites$,
    //   this.detailsService.getShowDetails()
    // ])
  }
}
