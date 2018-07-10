// Import the requirments
import { Directive, ElementRef, OnInit } from '@angular/core';

// Set the attribute directive
// The synatx is [<attribute name>]. 
// When the html will contain the <attribute name> without the bracckets
// Thi sdirective will be invoked.
@Directive({
    selector: '[appHighlight]'

    // Directive does not have a template !!!!
})

/**
 * We need to implement the OnInit
 */
export class HighlightDirective implements OnInit {

    // Get the element which the directive will be applied to
    // The type is ``ElementRef` and will be references internally as `elementRef`
    // 
    // This is called -- injection --
    // The injection will pass those variables every time the directve will be created
    constructor(private elementRef: ElementRef) {
        // The private elementRef will create a property in this calss with the given name
        // so we will be able to access it inside the class
    }

    ngOnInit() {

        // The logic of the directive. 
        // This directive will change the backgroundColor

        // this.elementRef = The local variable
        // nativeElement = The html element
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
