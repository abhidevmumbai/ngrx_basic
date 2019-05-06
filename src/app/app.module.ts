import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
