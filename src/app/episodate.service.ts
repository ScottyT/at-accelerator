import { Injectable, computed, signal } from '@angular/core';
import { API } from './constants';
import { HttpClient } from '@angular/common/http';
import { EpisodateData } from './episodate-data.model';
import { EpisodateShow } from './episodate-show.model';
import { formatDate } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class EpisodateService {
  private EPISODATE_URL: string = API.episodateApiUrl;
  private items$ = signal<EpisodateShow[]>([]);
  constructor(private http: HttpClient) {}

  getAll(): Observable<EpisodateShow[]> {
    return this.http.get<EpisodateData>(this.EPISODATE_URL + '/search').pipe(
      tap((response) => {
        response.tv_shows.map((x) => {
          x.start_date = formatDate(x.start_date, 'yyyy', 'en-us');
        });
      }),
      map((res) => res.tv_shows)
    );
  }

  setShows(shows: EpisodateShow[]): void {
    this.items$.set(shows);
  }

  getAllBySearchTerm(searchTerm: string) {
    return this.http
      .get<EpisodateData>(`${this.EPISODATE_URL}/search?q=${searchTerm}&page=1`)
      .pipe(
        tap((response) => {
          response.tv_shows.map((x) => {
            x.start_date = formatDate(x.start_date, 'yyyy', 'en-us');
          });
        }),
        map((res) => res.tv_shows)
      );
  }

  tvShows = this.items$.asReadonly();
}
