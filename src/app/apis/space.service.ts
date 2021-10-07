import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) {}
  async getNews(): Promise<any> {
    return await this.http
    .get('https://api.spaceflightnewsapi.net/v3/articles')
    .toPromise();
  }
}
