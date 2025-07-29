import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Chart } from 'chart.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeadermenuComponent } from './template/headermenu/headermenu.component';
import { FooterComponent } from './template/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { FormsModule } from '@angular/forms';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { InicioComponent } from './admin/pages/inicio/inicio.component';
import { UsuariosComponent } from './admin/pages/usuarios/usuarios.component';
import { MenuComponent } from './admin/template/menu/menu.component';
import { PanelComponent } from './admin/template/panel/panel.component';
import { ClientesComponent } from './admin/pages/clientes/clientes.component';
import { EmpleadosComponent } from './admin/pages/empleados/empleados.component';
import { VentasComponent } from './admin/pages/ventas/ventas.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './pages/success/success.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { InventariosComponent } from './admin/pages/inventarios/inventarios.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { RegisterComponent } from './auth/containers/register/register.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Configuración de fecha
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeadermenuComponent,
    FooterComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactosComponent,
    PruebasComponent,
    GaleriaComponent,
    InicioComponent,
    UsuariosComponent,
    MenuComponent,
    PanelComponent,
    ClientesComponent,
    EmpleadosComponent,
    VentasComponent,
    SuccessComponent,
    CancelComponent,
    InventariosComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    AuthService,
    AuthGuard,

    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Español
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: {
      parse: {
        dateInput: 'DD/MM/YYYY',
      },
      display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
      },
    }},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
