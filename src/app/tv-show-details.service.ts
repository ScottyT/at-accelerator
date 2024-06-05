import { Injectable, Signal, signal } from '@angular/core';
import { API } from './constants';
import { TvShowDetails, TvShowResponse } from './tv-show-details.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class TvShowDetailsService {
  private EPISODATE_URL: string = API.episodateApiUrl;
  private showDetailsSignal = signal<TvShowDetails>({} as TvShowDetails);
  private showDetails$ = toObservable(this.showDetailsSignal);

  constructor(private readonly http: HttpClient) {}

  getShowDetails(searchTerm: string | null) {
    return this.http
      .get<TvShowResponse>(`${this.EPISODATE_URL}/show-details?q=${searchTerm}`)
      .pipe(map((res) => res.tvShow));
    //.subscribe((data) => this.showDetailsSignal.set(data));

    //return this.showDetails$;
  }
}
