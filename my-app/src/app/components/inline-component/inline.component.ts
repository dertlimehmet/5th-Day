import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<h1>Inline Component</h1><input type="text" />`,
  styles: [`.input{background-color:red}`]
})
export class InlineComponent {

}
