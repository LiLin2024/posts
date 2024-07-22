import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Post } from '../types.model';
import { BehaviorSubject, catchError, finalize } from 'rxjs';
import { getPostData } from '../utils/posts-utils';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsSubject = new BehaviorSubject<Post[]>([]); // In-memory store
  allPosts$ = this.postsSubject.asObservable(); // Public observable
  private posts: Post[] = []

  // private posts = signal<Post[]>([])
  // allPosts = this.posts.asReadonly()

  constructor(private http: HttpClient) {
    this.fetchPosts()
  }

  fetchPosts() {
    //http requests
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe({
        next: (posts) => {
          this.posts = getPostData(posts.slice(15, 25))
          console.log(this.posts)
          this.postsSubject.next(this.posts)
        },
        error: (error) => {
          console.error('Error fetching posts', error);
        }
      })
  }

  getPostById(postId: number): Post | undefined {
    const getPost = this.posts.find((post) => post.id === postId)
    return getPost ? getPost : undefined
  }

  addPost(post: Post) {
    this.posts.push(post)
  }

  updatePost(updatedPost: Post) {
    this.posts = this.posts.map((post: Post) => {
      if (post.id === updatedPost.id) {
        return updatedPost
      }
      return post
    })

  }

  deletePost(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId)
  }
}
