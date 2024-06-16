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
        path: 'gestion-generos-list',
        title: 'Generos | Gallery Vibe',
        loadComponent: () => import('../../modules/usuarios/pages/usuario-generos-list/usuario-generos-list.component')
    },
    { 
        path: 'gestion-pintura',
        title: 'Pintura | Gallery Vibe',
        loadComponent: () => import('../../modules/pinturas/pages/pintura-list/pintura-list.component')
    },
    { 
        path: 'tecnicas-gestion',
        title: 'Técnicas | Gallery Vibe',
        loadComponent: () => import('../../modules/pinturas/pages/pintura-tecnica-list/pintura-tecnica-list.component')
    },
    {
        path: 'orden-compra',
        title: 'Orden Compra | Gallery Vibe',
        loadComponent: () => import('../../modules/ordencompra/pages/orden-compra/orden-compra.component').then(m => m.OrdenCompraComponent)
    },
  {
        path: 'venta-pinturas',
        title: 'Venta | Gallery Vibe',
        component: PresentacionComponent,
    },
    {
        path: 'registroV-pinturas',
        title: 'RegistroV | Gallery Vibe',
        component: ProcesoComponent,
    },
    {
        path: 'info-pinturas',
        title: 'Información venta | Gallery Vibe',
        component: InfoComponent,
    },
];
