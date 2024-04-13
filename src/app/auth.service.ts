import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private authToken: string | null= null;

  setToken(token: string): void {
    this.authToken = token;
  }
  getToken(): string | null{
    return this.authToken;
  }
}
