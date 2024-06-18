import {
  Directive,
  ElementRef,
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
  constructor(private elementRef: ElementRef) {}
  protected favoritesService = inject(FavoritesService);

  @Input() tvShowId: number;
  @HostListener('click') onClick() {
    this.toggleFavorites(this.tvShowId);
  }

  ngAfterViewInit() {
    const index = this.favoritesService.favoritesList().indexOf(this.tvShowId);
    if (index !== -1) {
      this.elementRef.nativeElement.classList.add('highlight');
    }
  }

  toggleFavorites(id: number) {
    const index = this.favoritesService.favoritesList().indexOf(id);
    if (index !== -1) {
      this.elementRef.nativeElement.classList.remove('highlight');
      this.favoritesService.favoritesList.update((favorites) =>
        favorites.filter((tvshow) => tvshow !== id)
      );
    } else {
      this.elementRef.nativeElement.classList.add('highlight');
      this.favoritesService.favoritesList.update((favorites) => [
        id,
        ...favorites,
      ]);
    }
  }
}
