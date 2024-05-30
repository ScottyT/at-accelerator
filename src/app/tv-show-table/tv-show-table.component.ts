import { Component, computed, input } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { EpisodateService } from '../episodate.service';
import { EpisodateShow } from '../episodate-show.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
})
export class TvShowTableComponent {
  tvShows = input<EpisodateShow[]>([]);
  filteredTvShows = computed(() => this.tvShows());
  items: EpisodateShow[];
  constructor(private episodateService: EpisodateService) {}

  ngOnInit() {
    // this.episodateService.getAll();
  }
}
