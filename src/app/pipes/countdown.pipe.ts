import { Pipe, PipeTransform } from '@angular/core';
import { Countdown } from '../tv-show-details.interface';
import { addDays, sub, subDays } from 'date-fns';
import type { Duration } from 'date-fns';

@Pipe({
  name: 'nextEpisodeCountdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  transform(value: Countdown | null, status: any) {
    if (value !== null) {
      const airDate = new Date(value.air_date);
      //const dayDifference = date;
      console.log(airDate.getDay());
      return `Next episode in `;
    } else {
      return status === 'Running'
        ? 'Running but no new episode'
        : 'Show has ended';
    }
  }
}
