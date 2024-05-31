import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { EpisodateService } from '../episodate.service';
import { EpisodateShow } from '../episodate-show.interface';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css'],
})
export class SearchViewComponent {
  searchQuery = signal<string>('');
  protected data: Signal<EpisodateShow[]>;
  constructor(protected episodateService: EpisodateService) {
    this.runSearch();
  }
  runSearch(sq: string = '', event?: Event) {
    event?.preventDefault();
    this.searchQuery.set(sq);
    this.data = this.episodateService.getAllBySearchTerm(sq);
  }
}
