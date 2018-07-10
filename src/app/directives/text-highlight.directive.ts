// We need to import the requirments for the Renderer
// Make sure to import Renderer2
import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective implements OnInit {

  // In this directive we will be using renderer and the elemnt as before
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // In stead of using the native element we wil use the renderer
    // The setStyle method get the required aleme
    this.renderer.setStyle(
      this.elRef.nativeElement, // Whic element we wantto add style to
      'font-size', // The css property which we wish to assign
      '24px' // the value of the css property
      /** Optional 4th param for flex css */
    )
  }
}
