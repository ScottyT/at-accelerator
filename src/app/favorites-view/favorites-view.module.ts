import { NgModule } from '@angular/core';
import { FavoritesViewComponent } from './favorites-view.component';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';

@NgModule({
  declarations: [FavoritesViewComponent],
  imports: [TvShowTableComponent],
})
export class FavoritesViewModule {}
