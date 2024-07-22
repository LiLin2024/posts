import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostViewComponent } from "./posts/post-view/post-view.component";
import { HeaderComponent } from "./header/header/header.component";
import { generateRandomParagraph } from './utils/posts-utils';
import { PostsService } from './services/posts.service';
import type { Post } from './types.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostViewComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = []

  constructor(private postsService: PostsService) {

  }

  ngOnInit(): void {
    // this.postsService.allPosts$.subscribe(posts => {
    //   this.posts = posts;
    // });
  }
}
