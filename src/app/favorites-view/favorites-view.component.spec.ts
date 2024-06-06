import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesViewComponent } from './favorites-view.component';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';

describe('FavoritesViewComponent', () => {
  let component: FavoritesViewComponent;
  let fixture: ComponentFixture<FavoritesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesViewComponent],
      imports: [TvShowTableComponent],
    });
    fixture = TestBed.createComponent(FavoritesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
