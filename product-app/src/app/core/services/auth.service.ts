import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private api = 'http://localhost:5110/api/auth';

    constructor(private http: HttpClient) { }

    login(data: any) {
        return this.http.post<any>(`${this.api}/login`, data).pipe();
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }

}