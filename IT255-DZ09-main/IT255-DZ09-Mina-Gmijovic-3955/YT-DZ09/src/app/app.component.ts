import { Component } from '@angular/core';
import { PostService } from './service/post.service';
import { Post } from './module/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT255-DZ09-Mina-Gmijovic-3955';
  lnth = 15;
  i = 0;
  channel = 'UCaZx4lDrMg2YKreWm7E423A';

  public postForm: FormGroup;

  public posts: Post[] = [];
  
  constructor(private _postService: PostService) {
    this._postService.getPosts(this.channel, this.lnth).subscribe((data: any) => {
      for (this.i; this.i < this.lnth; this.i++) {
        this.posts.push(new Post(data.items[this.i].snippet.title.slice(0, 50), data.items[this.i].snippet.thumbnails.default.url));
      }
    })
    this.initForm();
  }
  public initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ])
    });
  }
}
