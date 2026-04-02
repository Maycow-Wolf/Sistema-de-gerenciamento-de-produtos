import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { authGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component: LoginComponent }
    ]
  },

  {
    path: 'products',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ProductListComponent }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];