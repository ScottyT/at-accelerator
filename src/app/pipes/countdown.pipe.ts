import { Pipe, PipeTransform } from '@angular/core';
import { Countdown } from '../tv-show-details.interface';
import { differenceInDays } from 'date-fns';

@Pipe({
  name: 'nextEpisodeCountdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  transform(value: Countdown | undefined, status: any) {
    const dateExact = value !== undefined ? value.air_date : Date.now();
    const airDate = differenceInDays(dateExact, Date.now());

    if (airDate > -1) {
      return `Next episode in ${airDate} day`;
    } else {
      return status === 'Running'
        ? 'Running but no new episode'
        : 'Show has ended';
    }
  }
}
