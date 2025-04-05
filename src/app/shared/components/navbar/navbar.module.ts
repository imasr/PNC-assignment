import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
