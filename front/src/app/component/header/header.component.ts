import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Action } from 'rxjs/internal/scheduler/Action';
import { HomeComponent } from 'src/app/pages/home/home.component';

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
