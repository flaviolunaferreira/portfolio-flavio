import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stack } from 'src/app/model/Stack.model';
import { StackService } from 'src/app/service/stack.service';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['../style.css']
})
export class EstudoComponent {

  items: {label: string; link: string;}[] = [];

  ngOnInit(): void {
      this.findAll();
  }

  constructor(private service: StackService, private router: Router) { }

  findAll() {
    this.service.findAll().subscribe(resp => {
      if (resp.length < 1) {
        this.items = [{label: "Novo", link: "new-item"}]
      } else {
        resp.forEach( x => {
          this.items.push({label: x.name.toString(), link: "list-items"})
        })
      }
    })
  }

}
