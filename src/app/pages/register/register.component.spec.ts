import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [RegisterComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid`, () => {
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['password'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it(`form should be valid`, () => {
    component.registerForm.controls['email'].setValue('asd@asd.com');
    component.registerForm.controls['password'].setValue('aada');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it(`should have as text 'Register'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Register');
  });
});
