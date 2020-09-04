import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class ServComService {

  constructor() { }
  sayHellow()
  {
    alert("Hi at serviiice");
  }
}
