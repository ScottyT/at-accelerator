import { Injectable, Signal, signal } from '@angular/core';
import { API } from './constants';
import { TvShowResponse } from './tv-show-details.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TvShowDetailsService {
  private EPISODATE_URL: string = API.episodateApiUrl;

  constructor(private readonly http: HttpClient) {}

  getShowDetails(searchTerm: string | null) {
    return this.http
      .get<TvShowResponse>(`${this.EPISODATE_URL}/show-details?q=${searchTerm}`)
      .pipe(
        map((res) => {
          res.tvShow.seasonCount = res.tvShow.episodes.at(-1)!.season;
          return res.tvShow;
        })
      );
  }
}
