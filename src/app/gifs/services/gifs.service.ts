import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GIFResponse, Gif } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []
  private _tagHistory: string[] = [];
  private base_url: string = "https://api.giphy.com/v1/gifs"
  private apikey: string = "FQ6lKwgxRN6IJ7hEn415XT6a0pEtByQr"

  constructor(private http: HttpClient) {
    this.loadLocalstorage()
    const firstTag = this._tagHistory[0]
    if (firstTag) this.searchTag(firstTag)
  }

  get tagHistory(): string[] {
    return this._tagHistory
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase()
    if( this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag.toLowerCase() !== tag)
    }
    this._tagHistory.unshift(tag)
    this._tagHistory = this._tagHistory.splice(0,10)
    this.saveLocalstorage()
  }

  private saveLocalstorage() {
    localStorage.setItem("gifs", JSON.stringify(this._tagHistory))
  }

  private loadLocalstorage() {
    if(!localStorage.getItem("gifs")) return
    this._tagHistory = JSON.parse(localStorage.getItem("gifs")!)
  }

  searchTag(tag: string): void {
    if( tag.length === 0) return
    this.organizeHistory(tag)

    const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('limit', '10')
    .set('q', tag)

    this.http.get<GIFResponse>(`${this.base_url}/search`, {params})
    .subscribe((data) => {
      this.gifList = data.data
    })
  }

}
