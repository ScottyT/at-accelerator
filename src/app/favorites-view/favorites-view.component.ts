import { Component, Signal, computed } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { EpisodateShow } from '../episodate-show.interface';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { CommonModule } from '@angular/common';
import { TvShowDetailsService } from '../tv-show-details.service';
import { Observable, forkJoin } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { TvShowDetails } from '../tv-show-details.interface';
import { FavoritesCardComponent } from '../favorites-card/favorites-card.component';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css'],
  standalone: true,
  imports: [TvShowTableComponent, CommonModule, FavoritesCardComponent],
})
export class FavoritesViewComponent {
  protected data: Signal<EpisodateShow[]>;
  public favorites$: Observable<EpisodateShow[]>;
  public tvShowDetails$: Observable<TvShowDetails>;
  constructor(
    public favoritesService: FavoritesService,
    private detailsService: TvShowDetailsService
  ) {}
  ngOnInit() {
    this.getFavorites();
  }
  getFavorites() {
    this.data = this.favoritesService.favorites;
    //this.favorites$ = toObservable(this.favoritesService.favorites);
    // forkJoin([
    //   this.favorites$,
    //   this.detailsService.getShowDetails()
    // ])
  }
}
