import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-css',
  templateUrl: './html-css.component.html',
  styleUrls: ['../style.css']
})
export class HtmlCssComponent {

  items!: { label: string; link: string; }[];

  ngOnInit() {

    this.items = [
      {
        label: 'Album',
        link: 'htmlcss-album'
      },
      {
        label: 'Calculadora',
        link: 'htmlcss-calculadora'
      },
      {
        label: 'cubo',
        link: 'htmlcss-cubo'
      },
      {
        label: 'Fumaça',
        link: 'htmlcss-fumaca'
      },
      {
        label: 'Spinner',
        link: 'htmlcss-spinner'
      },
    ]
  }

}
