import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Stack } from 'src/app/model/Stack.model';
import { StackService } from 'src/app/service/stack.service';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['../style.css']
})
export class EstudoComponent {

  items: Stack[] = []

  ngOnInit(): void {
    this.findAll();
    console.log(this.findAll())
  }

  constructor(private service:StackService) {}

  findAll() {
    this.service.findAll().subscribe(resp => {
      this.items = resp;
    })
  }

}
