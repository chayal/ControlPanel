import { Component } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  someRange = [10];
  loginService: LoginService;

}
