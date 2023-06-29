import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsListComponent } from './recent-posts-list/recent-posts-list.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsListComponent,
    MainComponent,
  ],
  imports: [BrowserModule, CoreModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
