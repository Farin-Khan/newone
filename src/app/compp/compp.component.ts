import { Component, OnInit } from '@angular/core';
import {ServComService} from '../serv-com.service';
@Component({
  selector: 'app-compp',
  templateUrl: './compp.component.html',
  styleUrls: ['./compp.component.css']
})
export class ComppComponent implements OnInit {

  constructor(private serv:ServComService) { }

  ngOnInit(): void {
  }
  hellow()
  {
    this.serv.sayHellow();
  }
}
