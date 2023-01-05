import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
