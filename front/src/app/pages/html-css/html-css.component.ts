import { Component } from '@angular/core';

@Component({
  selector: 'app-html-css',
  templateUrl: './html-css.component.html',
  styleUrls: ['../style.css']
})
export class HtmlCssComponent {

  items: { titulo: string; link: string; }[] | undefined;

}
