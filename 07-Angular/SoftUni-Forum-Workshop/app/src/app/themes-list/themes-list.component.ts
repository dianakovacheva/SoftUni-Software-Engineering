import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themesList: ITheme[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllThemes().subscribe((themes) => {
      this.themesList = themes;
    });
  }
}
