import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodateShow } from '../episodate-show.interface';
import { RouterModule } from '@angular/router';
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterModule, ToggleFavoriteDirective],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
})
export class TvShowTableComponent {
  @Input()
  tvShows: EpisodateShow[] = [];
  constructor() {}
}
