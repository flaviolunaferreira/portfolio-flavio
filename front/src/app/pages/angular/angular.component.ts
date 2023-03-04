import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['../style.css']
})
export class AngularComponent {

  items: { titulo: string; link: string; }[] | undefined;

}
