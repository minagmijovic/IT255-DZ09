import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  apiKey: string = `AIzaSyBCxZmkSu0lvbG3pFSe2GG3nRowNc0MjQg`; 

  constructor(private _httpClient: HttpClient) { }

  public getPosts(channel: string, lngth: number): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + lngth
    return this._httpClient.get(url).pipe(
      map((res) => {
        return res;
      }))
  }

}