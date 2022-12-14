import { Component } from '@angular/core';
import {V, Container} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  list: V[] = [
    {working: 'true', a_number: 0},
    {working: 'yes', a_number: 1}
  ]

  initList: V[] = []

  broken = new Container(this.list, []);
  
  working1 = new Container(this.list, [] as V[]);
  working2 = new Container<V>(this.list, []);
  working3 = new Container(this.list, this.initList);
  working4 = new Container(this.list);

  /**
   * Should be callable only with a string or undefined
   */
  process(_value ?: string) { }
}
