import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type PageState = 'form' | 'success';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
  standalone: false,
})
export class ForgotPasswordPageComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  state: PageState = 'form';
  submittedEmail = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.submittedEmail = this.form.value.email;

    setTimeout(() => {
      this.loading = false;
      this.state = 'success';
    }, 1500);
  }

  resend(): void {
    this.loading = true;
    setTimeout(() => (this.loading = false), 1500);
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }
}
