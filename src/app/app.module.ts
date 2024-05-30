import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FavoritesViewComponent } from './favorites-view/favorites-view.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchViewComponent } from './search-view/search-view.component';

@NgModule({
  declarations: [AppComponent, FavoritesViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
