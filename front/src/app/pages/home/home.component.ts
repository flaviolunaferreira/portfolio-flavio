import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../style.css']
})
export class HomeComponent {

  items: { titulo: string; link: string; }[] | undefined;

  ngOnInit() {
    this.items = [
      {
        titulo: 'Informações pessoais',
        link: 'link'
      },
      {
        titulo: 'MInha História',
        link: 'link'
      },
      {
        titulo:'Outras Atividades',
        link: "link"
      },
      {
        titulo: 'BootCamps',
        link: 'link'
      },
      {
        titulo: 'Cursos Realizados',
        link: 'link'
      },
      {
        titulo: 'Entre em Contato',
        link: 'link'
      },
      {
        titulo: 'PlayList Favoritas',
        link: 'link'
      },
      {
        titulo: 'Sugestões de Estudo',
        link: 'link'
      },
      {
        titulo: 'Gráficos',
        link: 'link'
      }
    ]
  }

}
