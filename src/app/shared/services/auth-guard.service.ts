import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService  {
  constructor(private router: Router) {}

  canLoad() {
    const isLogin: any = sessionStorage.getItem('isLogin') || false;
    console.log(isLogin);

    if (isLogin) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
