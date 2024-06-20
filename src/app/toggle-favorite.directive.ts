import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { FavoritesService } from './favorites.service';

@Directive({
  selector: '[toggleFav]',
  standalone: true,
})
export class ToggleFavoriteDirective {
  protected favoritesService = inject(FavoritesService);

  @Input({ required: true, alias: 'toggleFav' }) tvShowId: number;
  @HostListener('click') onClick() {
    this.favoritesService.toggleFavorite(this.tvShowId);
  }

  @HostBinding('class.highlight')
  get isFavorite() {
    return this.favoritesService.favorites().includes(this.tvShowId);
  }
}
