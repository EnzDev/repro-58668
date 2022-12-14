import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * Simple component with a button
 * that outputs its input when clicked.
 */
@Component({
  selector: 'generic-comp',
  template: `<button (click)="out.emit(in)">emit</button>`,
})
export class GenericComponent<T> {
  @Input()
  in ?: T;

  @Output()
  out = new EventEmitter<T>()
}
