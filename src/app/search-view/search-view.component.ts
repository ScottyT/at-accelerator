import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { EpisodateService } from '../episodate.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { EpisodateData } from '../episodate-data.interface';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent, PaginatorComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css'],
})
export class SearchViewComponent {
  searchQuery = signal<string>('');
  protected data: Signal<EpisodateData>;
  constructor(protected episodateService: EpisodateService) {
    if (this.searchQuery() === '') {
      this.data = this.episodateService.getMostPopular(1);
    } else {
      this.runSearch();
    }
  }

  runSearch(sq: string = '', event?: Event) {
    event?.preventDefault();
    this.searchQuery.set(sq);
    this.data =
      sq !== ''
        ? this.episodateService.getAllBySearchTerm(sq)
        : this.episodateService.getMostPopular(1);
  }

  pageClick(page: number) {
    if (this.searchQuery() === '') {
      this.data = this.episodateService.getMostPopular(page);
    } else {
      this.data = this.episodateService.getAllBySearchTerm(
        this.searchQuery(),
        page
      );
    }
  }
}
