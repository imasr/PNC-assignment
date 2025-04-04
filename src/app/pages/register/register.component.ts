import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { emailValidator } from 'src/app/shared/utility/form-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading = false;

  registerForm = new UntypedFormGroup({
    email: new UntypedFormControl('', {
      validators: [Validators.required, emailValidator],
      updateOn: 'blur',
    }),
    password: new UntypedFormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'blur',
    }),
    bio: new UntypedFormControl('', {
      updateOn: 'blur',
    }),
  });
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.apiService
        .get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d')
        .subscribe(({ success }) => {
          sessionStorage.setItem('isLogin', success);
          this.loading = false;
          this.goToDashboard();
        });
    } else {
      console.log('invalid form');
      this.loading = false;
    }
  }

  goToDashboard() {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
