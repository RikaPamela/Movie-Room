import { Component } from '@angular/core';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  // login() {
  //    // code to handle user login
  //    this.isLoggedIn = true;
  //   //  this.tokenStorageService.signIn();
  //   window.location.reload();
  // }

  logout(): void {
    this.isLoggedIn = true;
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

