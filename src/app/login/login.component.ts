import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = new User('', '');
  errorMessage = false;
  log(x) { console.log(x); }

  constructor(private router: Router) { }

  onSubmit(isValid: boolean) {
    if (isValid) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = true;
    }
  }
}
