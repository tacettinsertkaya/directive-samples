import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiButton]',
  standalone: true,
})
export class UiButtonDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'margin', '0.25rem 0.125rem');
    renderer.setStyle(el.nativeElement, 'padding', '0.75rem 0.375rem');
    renderer.setStyle(el.nativeElement, 'font-size', '1rem');
    renderer.setStyle(el.nativeElement, 'border-width', '1px');
    renderer.setStyle(el.nativeElement, 'border-color', '#0d6efd');
    renderer.setStyle(el.nativeElement, 'border-radius', '0.375rem');
    renderer.setStyle(el.nativeElement, 'box-shadow', 'inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px');
    renderer.setStyle(el.nativeElement, 'color', '#fff');
    renderer.setStyle(el.nativeElement, 'background-color', '#0d6efd');
  }
}
