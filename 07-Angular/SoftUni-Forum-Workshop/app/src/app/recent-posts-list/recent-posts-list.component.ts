import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-recent-posts-list',
  templateUrl: './recent-posts-list.component.html',
  styleUrls: ['./recent-posts-list.component.css'],
})
export class RecentPostsListComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts(5).subscribe((value) => {
      console.log(value);
    });
  }
}
