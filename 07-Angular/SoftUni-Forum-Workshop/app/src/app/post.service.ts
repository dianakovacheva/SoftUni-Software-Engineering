import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAllThemes() {
    return this.httpClient.get(`${apiURL}/themes`);
  }

  getAllPosts(limit?: number) {
    return this.httpClient.get(
      `${apiURL}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
