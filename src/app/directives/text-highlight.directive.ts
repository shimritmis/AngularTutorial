// We need to import the requirements for the Renderer
// Make sure to import Renderer2
import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit {

  // Set the property we wish to bind, in our case it will be the backgroundColor of the style attribute
  @HostBinding('style.backgroundColor') bgColor: string;

  // Add another color binding
  @HostBinding('style.color') color: string;

  // In this directive we will be using renderer and the element as before
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // In stead of using the native element we wil use the renderer
    // The setStyle method get the required element and the style
    this.renderer.setStyle(
      this.elRef.nativeElement, // Which element we want to add style to
      'font-size', // The css property which we wish to assign
      '24px' // the value of the css property
      /** Optional 4th param for flex css */
    )
  }

  /**
 * Add the mouse event listeners to the directive
 * Each event gets it own Host listener
 */
  @HostListener('mouseenter') mouseover(event: Event) {
    // Instead of the renderer we will now have a direct access to the style background
    this.bgColor = '#1e1e1e';
    this.color = '#4EC9B0';
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.bgColor = 'transparent';
    this.color = 'black';
  }
}
