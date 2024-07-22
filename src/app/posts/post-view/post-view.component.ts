import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../types.model';
import { PostTableComponent } from '../post-table/post-table.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [PostTableComponent, NgIf],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.scss'
})
export class PostViewComponent implements OnInit {
  private postService = inject(PostsService)
  allPosts: Post[] = []

  constructor(private postsService: PostsService) {

  }

  ngOnInit(): void {
    this.postService.allPosts$.subscribe((posts) => {
      this.allPosts = posts
    })
  }

}
