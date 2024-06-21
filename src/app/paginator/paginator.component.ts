import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() numberOfShows = 0;
  @Input() pageSize = 20;
  @Input() currentPage = 1;
  @Input() totalPages = 0;
  pageChanged = output<number>();

  pageChangeClick(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.pageChanged.emit(pageNumber);
    }
  }
}
