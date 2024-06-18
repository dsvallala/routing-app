import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  template: `
    <div>
      <p>Value: {{ value }}</p>
    </div>
  `
})
export class CustomComponent {
  @Input() value: string | undefined;
}
