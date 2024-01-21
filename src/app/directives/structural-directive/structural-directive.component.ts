import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PermDirective } from './perm.directive';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [
    NgIf,
    PermDirective
  ],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {

}
