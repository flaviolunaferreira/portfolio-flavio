import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { ApiRestComponent } from './pages/api-rest/api-rest.component';
import { HomeComponent } from './pages/home/home.component';
import { HtmlCssComponent} from './pages/html-css/html-css.component';
import { JavaComponent } from './pages/java/java.component';
import { MicroServicoComponent } from './pages/micro-servico/micro-servico.component';
import { ReactComponent } from './pages/react/react.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'htmlcss',
    component: HtmlCssComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'apirest',
    component: ApiRestComponent
  },
  {
    path: 'react',
    component: ReactComponent
  },
  {
    path: 'java',
    component: JavaComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'microservico',
    component: MicroServicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
