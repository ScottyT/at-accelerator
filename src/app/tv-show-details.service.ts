import { Injectable } from '@angular/core';
import { API } from './constants';
import { TvShowDetails, TvShowResponse } from './tv-show-details.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, shareReplay, switchMap } from 'rxjs';
import { FavoritesService } from './favorites.service';
import { TvShowIds } from './episodate-show.interface';

@Injectable({ providedIn: 'root' })
export class TvShowDetailsService {
  private EPISODATE_URL: string = API.episodateApiUrl;
  readonly allShowDetails$: Observable<TvShowDetails[]> =
    this.favoritesService.favorites$.pipe(
      switchMap((show) => this.getAllTvShowDetails(show.map((x) => x))),
      shareReplay(1)
    );
  constructor(
    private readonly http: HttpClient,
    private readonly favoritesService: FavoritesService
  ) {}

  getShowDetails(searchTerm: string | null) {
    return this.http
      .get<TvShowResponse>(`${this.EPISODATE_URL}/show-details?q=${searchTerm}`)
      .pipe(
        map((res) => {
          res.tvShow.seasonCount = res.tvShow.episodes.at(-1)!.season;
          return res.tvShow;
        }),
        shareReplay(1)
      );
  }

  private getAllTvShowDetails(showIds: TvShowIds): Observable<TvShowDetails[]> {
    return forkJoin(
      showIds.map((id) => this.getShowDetails(id.toString()))
    ).pipe(map((tvShowDetails) => this.sortTvShowByNextEpisode(tvShowDetails)));
  }

  private sortTvShowByNextEpisode(
    tvShowDetails: TvShowDetails[]
  ): TvShowDetails[] {
    tvShowDetails.sort((show1, show2) => {
      if (show1.status === 'Running' && show2.status !== 'Running') {
        return -1;
      }
      if (show1.status === 'Ended' || show1.status === 'Canceled/Ended') {
        return 1;
      }
      if (show1.countdown && !show2.countdown) {
        return -1;
      }
      if (
        show1.countdown &&
        show2.countdown &&
        show1.countdown?.air_date < show2.countdown?.air_date
      ) {
        return -1;
      }
      return 0;
    });
    return tvShowDetails;
  }
}
