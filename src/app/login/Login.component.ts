import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authCode: string;
  loginService: LoginService;
  login(): void {

    this.loginService.initialUserCode(this.authCode);
    
  }
  ngOnInit() {
    this.loginService.removeUserCode()
  }

}
