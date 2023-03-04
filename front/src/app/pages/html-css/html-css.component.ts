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
        label: 'cubo',
        link: 'htmlcss-cubo'
      },
      {
        label: 'Fumaça',
        link: 'htmlcss-fumaca'
      },
      {
        label: 'Calculadora',
        link: 'htmlcss-calculadora'
      }
    ]
  }

}
