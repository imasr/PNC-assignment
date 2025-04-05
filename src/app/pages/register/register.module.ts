import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    SpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterComponent,
      },
    ]),
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
