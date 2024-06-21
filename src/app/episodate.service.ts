import { Injectable, signal } from '@angular/core';
import { API } from './constants';
import { HttpClient } from '@angular/common/http';
import { EpisodateData } from './episodate-data.interface';
import { EpisodateShow } from './episodate-show.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodateService {
  private EPISODATE_URL: string = API.episodateApiUrl;
  private items$ = signal<EpisodateData>({
    total: 0,
    tv_shows: [] as EpisodateShow[],
  } as EpisodateData);
  constructor(private http: HttpClient) {}

  getAllBySearchTerm(searchTerm: string = '', page: number = 1) {
    this.http
      .get<EpisodateData>(
        `${this.EPISODATE_URL}/search?q=${searchTerm}&page=${page}`
      )
      //.pipe(map((res) => res.tv_shows))
      .subscribe((data) => {
        this.items$.set(data);
      });

    return this.items$.asReadonly();
  }

  getMostPopular(pageNumber: number) {
    this.http
      .get<EpisodateData>(
        `${this.EPISODATE_URL}/most-popular?page=${pageNumber}`
      )
      .subscribe((data) => {
        this.items$.set(data);
      });

    return this.items$.asReadonly();
  }
}
