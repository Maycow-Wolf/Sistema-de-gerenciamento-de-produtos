import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {

    email = '';
    password = '';
    errorMessage = '';

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    login() {

        const data = {
            email: this.email,
            password: this.password
        };

        this.auth.login(data).subscribe({
            next: (res) => {
                this.auth.saveToken(res.token);
                this.router.navigate(['/products']);
            },

            error: () => {

                this.errorMessage = 'E-mail ou senha inválidos';

            }
            
        });

    }
}