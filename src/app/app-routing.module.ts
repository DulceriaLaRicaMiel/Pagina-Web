import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { InicioComponent } from './admin/pages/inicio/inicio.component';
import { UsuariosComponent } from './admin/pages/usuarios/usuarios.component';
import { ClientesComponent } from './admin/pages/clientes/clientes.component';
import { EmpleadosComponent } from './admin/pages/empleados/empleados.component';
import { SuccessComponent } from './pages/success/success.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { InventariosComponent } from './admin/pages/inventarios/inventarios.component';
import { VentasComponent } from './admin/pages/ventas/ventas.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { RegisterComponent } from './auth/containers/register/register.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'galeria',
    component: GaleriaComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'contactos',
    component: ContactosComponent,
  },
  {
    path: 'pruebas',
    component: PruebasComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
  },
  {
    path: 'inventarios',
    component: InventariosComponent,
  },
  {
    path: 'ventas',
    component: VentasComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'cancel',
    component: CancelComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
