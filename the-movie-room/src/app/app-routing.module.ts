import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WatchButtonComponent } from './watch-button/watch-button.component';
//import { ProductComponent } from './product-card/product-card.component';
import { ReactiveFormComponent } from './Register_component/reactive-form/reactive-form.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: ReactiveFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'watch-button', component: WatchButtonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
