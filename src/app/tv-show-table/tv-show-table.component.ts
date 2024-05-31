import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodateShow } from '../episodate-show.interface';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
})
export class TvShowTableComponent {
  tvShows = input<EpisodateShow[]>([]);
}
