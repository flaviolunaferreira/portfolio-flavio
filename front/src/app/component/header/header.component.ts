import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-star',
        routerLink: ['/']
      },
      {
        label: 'Estudo',
        icon: 'pi pi-book'
      },
      {
        label: 'Projetos',
        icon: 'pi pi-folder-open',
        items: [
          {
            label: 'Html-Css',
            routerLink: ['/htmlcss']
          },
          {
            label: 'Java',
            routerLink: ['/java']
          },
          {
            label: 'React',
            routerLink: ['/react']
          },
          {
            label: 'Angular',
            routerLink: ['/angular']
          },
          {
            label: 'ApiRest',
            routerLink: ['/apirest']
          },
          {
            label: 'Micro-Serviço',
            routerLink: ['/microservico']
          }
        ]
      },
      {
        label: 'Gráficos',
        icon: 'pi pi-chart-bar'
      },
      {
        label: 'Sobre',
        icon: 'pi pi-eye',
        routerLink: ['/sobre']
      },
      {
        label: 'Login',
        icon: 'pi pi-sign-in'
      }
    ]
  }

}
