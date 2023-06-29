import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsListComponent } from './recent-posts-list.component';

describe('RecentPostsListComponent', () => {
  let component: RecentPostsListComponent;
  let fixture: ComponentFixture<RecentPostsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentPostsListComponent]
    });
    fixture = TestBed.createComponent(RecentPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
