import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';


//import { FormsModule } from '@angular/forms';
import { WatchButtonComponent } from './watch-button/watch-button.component';
// import { ReactiveFormComponent } from './Register_component/reactive-form/reactive-form.component';
 import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { MoviesComponent } from './movies/movies.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';

// import { RegisterComponent } from './register/register.component';
// import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [	
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
   
    WatchButtonComponent,
    
    BoardAdminComponent,
    MoviesComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    RegisterComponent,
    FooterComponent,
    WishlistComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
