import { Component } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['../style.css']
})
export class JavaComponent {
  
  items: { titulo: string; link: string; }[] | undefined;

}
