import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListStackService } from 'src/app/service/list-stack.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  itemslist: {name: string; idListStack: number; description: string; referency: string}[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  constructor(private service: ListStackService, private router: Router) {};


  findAll() {
    this.service.findAll().subscribe(resp => {
      resp.forEach(x => {
       this.itemslist.push({
          description: x.description.toString(),
          idListStack: x.idListStack,
          name: x.name.toString(),
          referency: x.referency.toString()
        })
      })
    })
  }
}
