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
import { CuboComponent } from './pages/html-css/cubo/cubo.component';
import { FumacaComponent } from './pages/html-css/fumaca/fumaca.component';
import { CalculadoraComponent } from './pages/html-css/calculadora/calculadora.component';
import { SpinnerComponent } from './pages/html-css/spinner/spinner.component';
import { AlbumComponent } from './pages/html-css/album/album.component';
import { EstudoComponent } from './pages/estudo/estudo.component';
import { NewItemComponent } from './pages/estudo/new-item/new-item.component';
import { SeeItemComponent } from './pages/estudo/see-item/see-item.component';
import { ListItemComponent } from './pages/estudo/list-item/list-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'estudo',
    component: EstudoComponent
  },
    {path: 'new-item', component: NewItemComponent, outlet: 'detalhes' },
    {path: 'see-item', component: SeeItemComponent, outlet: 'detalhes' },
    {path: 'list-items', component: ListItemComponent, outlet: 'detalhes' },
  {
    path: 'htmlcss',
    component: HtmlCssComponent
  },
    { path: 'htmlcss-cubo', component: CuboComponent, outlet: 'detalhes' },
    { path: 'htmlcss-fumaca', component: FumacaComponent, outlet: 'detalhes' },
    { path: 'htmlcss-calculadora', component: CalculadoraComponent, outlet: 'detalhes' },
    { path: 'htmlcss-spinner', component: SpinnerComponent, outlet: 'detalhes' },
    { path: 'htmlcss-album', component: AlbumComponent, outlet: 'detalhes' },
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
