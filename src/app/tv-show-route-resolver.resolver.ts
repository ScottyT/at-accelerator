import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { TvShowDetailsService } from './tv-show-details.service';
import { of } from 'rxjs';

export const tvShowRouteResolverResolver = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');
  if (!id) {
    return of(undefined);
  }
  return inject(TvShowDetailsService).getShowDetails(id!);
};
