import { Component, computed, input } from '@angular/core';
import { TvShowDetails } from '../tv-show-details.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { CountdownPipe } from '../pipes/countdown.pipe';
import { RouterModule } from '@angular/router';
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';

@Component({
  selector: 'app-favorites-card',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    CountdownPipe,
    RouterModule,
    ToggleFavoriteDirective,
  ],
  templateUrl: './favorites-card.component.html',
  styleUrl: './favorites-card.component.css',
})
export class FavoritesCardComponent {
  details = input.required<TvShowDetails>();
  lastEpisode = computed(() => {
    return this.details().countdown;
  });
  constructor() {}
}
