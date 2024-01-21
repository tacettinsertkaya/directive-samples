import { Component } from '@angular/core';
import { UiButtonDirective } from './ui-button.directive';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [
    UiButtonDirective
  ],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {

}
