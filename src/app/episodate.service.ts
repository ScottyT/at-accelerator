import { Injectable, signal } from '@angular/core';
import { API } from './constants';
import { HttpClient } from '@angular/common/http';
import { EpisodateData } from './episodate-data.model';
import { EpisodateShow } from './episodate-show.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodateService {
  private EPISODATE_URL: string = API.episodateApiUrl;
  private items$ = signal<EpisodateShow[]>([]);
  constructor(private http: HttpClient) {}

  getAllBySearchTerm(searchTerm: string = '') {
    this.http
      .get<EpisodateData>(`${this.EPISODATE_URL}/search?q=${searchTerm}&page=1`)
      .pipe(map((res) => res.tv_shows))
      .subscribe((data) => {
        this.items$.set(data);
      });

    return this.items$.asReadonly();
  }
}
