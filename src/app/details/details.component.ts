import { Component, Input, Signal, computed, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TvShowDetails } from '../tv-show-details.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input()
  tvshow: TvShowDetails;

  tvshowSignal: Signal<TvShowDetails>;
  constructor(private router: Router) {}

  ngOnInit() {
    this.tvshowSignal = signal<TvShowDetails>(this.tvshow);
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
