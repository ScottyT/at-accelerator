import { Component, Input, input } from '@angular/core';
import { TvShowDetails } from '../tv-show-details.interface';
import { TvShowDetailsService } from '../tv-show-details.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-favorites-card',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './favorites-card.component.html',
  styleUrl: './favorites-card.component.css',
})
export class FavoritesCardComponent {
  @Input() details!: TvShowDetails;
  constructor(private detailsService: TvShowDetailsService) {}
}
