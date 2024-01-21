import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngPerm]',
  standalone: true,
})
export class PermDirective {
  permission: Array<string> = ['superadmin', 'admin', 'user'];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set ngPerm(scope: string) {
    let isCheck = this.permission.find((item) => item == scope) ? true : false;
    if (isCheck) this.viewContainer.createEmbeddedView(this.templateRef);
    else this.viewContainer.clear();
  }
}
