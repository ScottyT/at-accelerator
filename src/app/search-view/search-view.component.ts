import { Component, computed, signal } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { EpisodateService } from '../episodate.service';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css'],
})
export class SearchViewComponent {
  searchQuery = signal<string>('');
  constructor(public episodateService: EpisodateService) {}

  tvShows = computed(() => this.episodateService.getAll());

  ngOnInit() {
    this.episodateService
      .getAll()
      .subscribe((x) => this.episodateService.setShows(x));
  }

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
    this.episodateService
      .getAllBySearchTerm(sq)
      .subscribe((x) => this.episodateService.setShows(x));
  }
}
