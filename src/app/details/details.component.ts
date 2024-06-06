import { Component, Input, Signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.activatedRoute.data.subscribe(({ tvshow }) => {
    //   console.log(tvshow as TvShowDetails);
    //   this.tvshow = tvshow;
    // });
  }
}
