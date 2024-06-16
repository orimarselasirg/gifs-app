import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if(!this.imageUrl) throw new Error('La imagen es requerida');
  }

  public hasLoaded: boolean = false;

  @Input()
  public imageUrl: string = '';

  @Input()
  public alt: string = '';

  onLoad(): void {
    console.log('imagen cargada' )
    this.hasLoaded = true;
  }

}
