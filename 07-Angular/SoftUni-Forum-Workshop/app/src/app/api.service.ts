import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllThemes() {
    const { appURL } = environment;
    return this.http.get<ITheme[]>(`${appURL}/themes`);
  }

  getPosts(limit?: number) {
    const { appURL } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<IPost[]>(`${appURL}/posts${limitFilter}`);
  }
}
