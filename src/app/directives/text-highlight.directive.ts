// We need to import the requirements for the Renderer
// Make sure to import Renderer2
import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit {

  // The 2 inputs which we will read from the element
  @Input() defaultBgColor: string = 'transparent';
  @Input() hoverBgColor: string = '#1e1e1e';

  defaultColor: string = "black";
  hoverColor: string = "white";

  // Set the property we wish to bind, in our case it will be the backgroundColor of the style attribute
  // Add the default color
  @HostBinding('style.backgroundColor') bgColor: string;

  // Add another color binding
  @HostBinding('style.color') color: string;

  // In this directive we will be using renderer and the element as before
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {

    // Set the defaults ...
    this.bgColor = this.defaultBgColor;
    this.color = this.defaultColor;

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
    this.bgColor = this.hoverBgColor;
    this.color = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.bgColor = this.defaultBgColor;
    this.color = this.defaultColor;
  }
}
