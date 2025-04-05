import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent implements OnInit {
  user: { name?: string; email?: string; bio?: string; img?: string } = {};

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.apiService
      .get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2')
      .subscribe((user) => {
        if (user) {
          this.user = user;
        }
      });
  }

  logout() {
    sessionStorage.clear();
    setTimeout(() => {
      this.router.navigate(['/register']);
    });
  }
}
