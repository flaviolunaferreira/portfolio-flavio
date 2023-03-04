import { Component } from '@angular/core';

@Component({
  selector: 'app-micro-servico',
  templateUrl: './micro-servico.component.html',
  styleUrls: ['../style.css']
})
export class MicroServicoComponent {

  items: { titulo: string; link: string; }[] | undefined;

}
