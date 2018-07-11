import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  visible: boolean = true;

  // In this case its a property which will be executed whenever this property is 
  // changes even if the value is outside of this directive.
  @Input() set appUnless(condition: boolean) {
    // Check the condition
    if (!condition) {
      // The unless directive should display the content if the condition is false
      // In order to display the content we creating a view and injecting the template
      // into this view
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Remove the content from the view
      this.vcRef.clear();
    }
  }

  // This directive will be used with ng-template since its a structural template
  // so we will grab the template and the container where to display it
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

}
