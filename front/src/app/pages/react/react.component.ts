import { Component } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['../style.css']
})
export class ReactComponent {

  items: { titulo: string; link: string; }[] | undefined;

}
