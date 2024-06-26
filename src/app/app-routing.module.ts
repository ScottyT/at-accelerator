import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from './search-view/search-view.component';
import { tvShowRouteResolverResolver } from './tv-show-route-resolver.resolver';

const routes: Routes = [
  { path: '', component: SearchViewComponent },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./favorites-view/favorites-view.component').then(
        (c) => c.FavoritesViewComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details/details.component').then((c) => c.DetailsComponent),
    resolve: { tvshow: tvShowRouteResolverResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
