import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card-component',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gifs!: Gif;

  ngOnInit(): void {
    if(!this.gifs) throw new Error('Method not implemented.');
  }
}
