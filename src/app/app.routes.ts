import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { ProductosComponent } from './productos/productos';
import { RegistroComponent } from './registro/registro';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
