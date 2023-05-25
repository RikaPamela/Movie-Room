import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WatchButtonComponent } from './watch-button/watch-button.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthGuard } from './auth.guard';
import { AddToWatchComponent } from './add-to-watch/add-to-watch.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'watch-button/:id', component: WatchButtonComponent},
  {path:'wishlist' , component: WishlistComponent},
  {path:'addToWatchList' , component: AddToWatchComponent,canActivate :[AuthGuard ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
