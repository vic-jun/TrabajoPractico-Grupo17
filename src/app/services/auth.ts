import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  register(email: string, password: string): boolean {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      return false; 
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    this.isLoggedIn = !!user;
    return this.isLoggedIn;
  }

  private getUsers(): Array<{ email: string, password: string }> {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  logout() {
    this.isLoggedIn = false;
  }
}
