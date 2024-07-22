import { Component, Input } from '@angular/core';
import { Post } from '../../types.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.scss'
})
export class PostTableComponent {
  @Input({ required: true }) allPosts: Post[] = []

  trackPostById(index: number, post: Post) {
    return post.id
  }

}
