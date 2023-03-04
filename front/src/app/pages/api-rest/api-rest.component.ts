import { Component } from '@angular/core';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['../style.css']
})
export class ApiRestComponent {

  items: { titulo: string; link: string; }[] | undefined;

}
