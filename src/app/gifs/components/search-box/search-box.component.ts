import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box-component',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('tagData')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifService: GifsService){}

  // searchTag(tag:string):void  {
  searchTag():void  {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = ""
  }

}
