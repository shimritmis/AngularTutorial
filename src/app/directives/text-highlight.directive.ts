// We need to import the requirments for the Renderer
// Make sure to import Renderer2
import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit {

  // In this directive we will be using renderer and the elemnt as before
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private renderer1: Renderer2
  ) { }

  ngOnInit() {
    // In stead of using the native element we wil use the renderer
    // The setStyle method get the required aleme
    this.renderer.setStyle(
      this.elRef.nativeElement, // Which element we wantto add style to
      'font-size',       // The css property which we wish to assign
      '24px' // the value of the css property
      /** Optional 4th param for flex css */
    )
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

  /**
   * Add the mouse event listsners to the directive
   * Each event gets it own Host listsner
   */
  @HostListener('mouseenter') mouseover(event: Event) {
    // as before we will use the renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'navy');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // as before we will use the renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

}
