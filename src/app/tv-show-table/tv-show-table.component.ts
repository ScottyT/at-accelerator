import { Component, computed, input } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { EpisodateService } from '../episodate.service';
import { EpisodateShow } from '../episodate-show.model';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
})
export class TvShowTableComponent {
  tvShows = input<EpisodateShow[]>([]);
  constructor(private episodateService: EpisodateService) {}
}
