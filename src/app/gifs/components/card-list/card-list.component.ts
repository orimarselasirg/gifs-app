import { Component, Input } from '@angular/core';
import { CardItem } from '../../interfaces/card-list.interface';
import { Gif } from '../../interfaces/gif.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list-component',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  constructor(private gifService: GifsService) {}

  get gifsList(): Gif[] {
    return [...this.gifService.gifList]
  }
}
