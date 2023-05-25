import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { TokenStorageService } from 'src/services/token-storage.service';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  password: string = ''
  username: string = ''
  isLoggedIn: any
  constructor(private loginComponent: LoginComponent, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.isLoggedIn = this.loginComponent.onSubmit();
    // if (!this.isLoggedIn) {
    //   // window.alert('Please SignIn')
    //   console.log('please login')
    // } else {
    //   this.router.navigate(['aaddToWatchList']);
    // }
    return false;
  }
}
