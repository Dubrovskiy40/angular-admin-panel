import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  submitLogin() {
    this._authService.login(this.loginForm.value).subscribe({
      next: () => this._router.navigate(['admin']),
      error: (err) => alert(err.message)
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
        ])
    });
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['admin'])
    }
  }
}
