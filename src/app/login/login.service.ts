import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isDevloper: boolean;
  isMaintenance: boolean;
  isOperator: boolean;

  initialUserCode(authCode: string): void {
    if (authCode === '123') {
      this.isOperator = true;
    } else if (authCode === '456') {
      this.isMaintenance = true;
    } else if (authCode === '789') {
      this.isDevloper = true;
    }
  }

  showDevloper(): boolean {
    return this.isDevloper;
  }

  showMaintenance(): boolean {
    return this.isMaintenance;
  }

  showOperator(): boolean {
    return this.isOperator;
  }

  removeUserCode(): void {
    this.isDevloper = false;
    this.isMaintenance = false;
    this.isOperator = false;
  }
}
