import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HtmlCssComponent } from './pages/html-css/html-css.component';
import { JavaComponent } from './pages/java/java.component';
import { ReactComponent } from './pages/react/react.component';
import { AngularComponent } from './pages/angular/angular.component';
import { ApiRestComponent } from './pages/api-rest/api-rest.component';
import { MicroServicoComponent } from './pages/micro-servico/micro-servico.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LoginComponent } from './pages/login/login.component';
import { CuboComponent } from './pages/html-css/cubo/cubo.component';
import { FumacaComponent } from './pages/html-css/fumaca/fumaca.component';
import { CalculadoraComponent } from './pages/html-css/calculadora/calculadora.component';
import { SpinnerComponent } from './pages/html-css/spinner/spinner.component';
import { AlbumComponent } from './pages/html-css/album/album.component';
import { EstudoComponent } from './pages/estudo/estudo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    HtmlCssComponent,
    JavaComponent,
    ReactComponent,
    AngularComponent,
    ApiRestComponent,
    MicroServicoComponent,
    SobreComponent,
    LoginComponent,
    CuboComponent,
    FumacaComponent,
    CalculadoraComponent,
    SpinnerComponent,
    AlbumComponent,
    EstudoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MenubarModule,
    InputTextModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    CardModule,
    SidebarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
