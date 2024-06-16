import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { LazyImageComponent } from '../shared/components/lazy-image/lazy-image.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomepageComponent, SearchBoxComponent, CardListComponent, GifsCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HomepageComponent]
})
export class GifsModule { }
