import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    { 
        path: 'login',
        title: 'Login | Gallery Vibe',
        loadComponent: () => import('../../modules/usuarios/pages/usuario-login/usuario-login.component')
    },
    { 
        path: 'registrar-usuario',
        title: 'Registrar | Gallery Vibe',
        loadComponent: () => import('../../modules/usuarios/pages/usuario-formulario/usuario-formulario.component')
    }
];
