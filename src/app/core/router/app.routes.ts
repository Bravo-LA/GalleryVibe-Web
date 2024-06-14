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
        path: 'home',
        title: 'Home | Gallery Vibe',
        loadComponent: () => import('../../modules/pages/home/home.component')
    },
    { 
        path: 'informacion-usuario',
        title: 'Información | Gallery Vibe',
        loadComponent: () => import('../../modules/usuarios/pages/usuario-informacion/usuario-informacion.component')
    },
    { 
        path: 'registrar-usuario',
        title: 'Registrar | Gallery Vibe',
        loadComponent: () => import('../../modules/usuarios/pages/usuario-formulario/usuario-formulario.component')
    },
    { 
        path: 'gestion-pintura',
        title: 'Pintura | Gallery Vibe',
        loadComponent: () => import('../../modules/pinturas/pages/pintura-list/pintura-list.component')
    },
    {
        path: 'orden-compra',
        title: 'Orden Compra | Gallery Vibe',
        loadComponent: () => import('../../modules/ordencompra/pages/orden-compra/orden-compra.component').then(m => m.OrdenCompraComponent)
    }
];
