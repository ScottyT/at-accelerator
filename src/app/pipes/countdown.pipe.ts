import { Pipe, PipeTransform } from '@angular/core';
import { Countdown } from '../tv-show-details.interface';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'nextEpisodeCountdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  transform(value: Countdown | null, status: any) {
    if (value?.air_date) {
      return `Next episode ${formatDistanceToNow(value.air_date, {
        addSuffix: true,
      })}`;
    } else {
      return status === 'Running'
        ? 'Running but no new episode'
        : 'Show has ended';
    }
  }
}
