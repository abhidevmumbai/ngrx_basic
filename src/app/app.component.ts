import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from '../../node_modules/rxjs';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message$: Observable<string>;
  post: Observable<Post>;
  text: string;

  constructor (private store: Store<AppState>) {
    this.message$ = store.select('message');
    this.post = store.select('post');
  }

  spanishMessage () {
    this.store.dispatch({type: 'Spanish'});
  }

  frenchMessage () {
    this.store.dispatch({type: 'French'});
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
