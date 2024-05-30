import { Component, computed, signal } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { Observable } from 'rxjs';
import { EpisodateShow } from '../episodate-show.model';
import { EpisodateService } from '../episodate.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css'],
})
export class SearchViewComponent {
  searchQuery = signal<string>('');
  shows$: Observable<EpisodateShow[]>;
  //showSignal = toSignal(this.shows$, { initialValue: [] });
  constructor(public episodateService: EpisodateService) {}

  ngOnInit() {
    //this.episodateService.showSignal();
    this.episodateService
      .getAll()
      .subscribe((x) => this.episodateService.setShows(x));
  }

  changeListOfShows(shows: EpisodateShow[]) {
    this.episodateService.setShows(shows);
  }

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
    this.episodateService
      .getAllBySearchTerm(sq)
      .subscribe((x) => this.episodateService.setShows(x));
  }

  tvShows = computed(() => {
    const sq = this.searchQuery();
    return this.episodateService.getAllBySearchTerm(sq);
  });
}
