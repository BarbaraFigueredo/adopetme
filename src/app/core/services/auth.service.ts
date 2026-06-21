import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADOTANTE' | 'FUNCIONARIO' | 'ADMINISTRADOR';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<{ token: string; user: User }> {
    if (!email || !password) {
      return throwError(() => new Error('Credenciais inválidas'));
    }
    const response = {
      token: `mock-jwt-${Date.now()}`,
      user: { id: '1', name: 'Usuário Demo', email, role: 'ADOTANTE' as const },
    };
    return of(response).pipe(
      delay(1200),
      tap((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }
}
