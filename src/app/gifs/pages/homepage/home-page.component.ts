import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-homepage-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomepageComponent {
  // constructor(private gifService: GifsService) {}

  // get gifsList(): Gif[] {
  //   return [...this.gifService.gifList]
  // }
}
