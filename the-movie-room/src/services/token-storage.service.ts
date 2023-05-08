import { Injectable } from '@angular/core';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(environment.TOKEN_KEY);
    window.sessionStorage.setItem(environment.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(environment.USER_KEY);
    window.sessionStorage.setItem(environment.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(environment.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
