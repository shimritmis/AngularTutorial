import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {
  // Define our custom element which is used in the template (html)
  // This element is private for this component and now we want to "share" it 
  // with other components
  // If we wish to use the property with a different name than the default name we can
  // set the name inside the `@Input()` decorator for example:
  //    @Input('<any name we want>') => @Input('serverItem') and we will use the same name
  //    to reference it in the html template 
  //    `[serverItem]="serverElement"`
  @Input() serverElement: {
    type: string,
    name: string,
    content: string
  }

  constructor() { }

  ngOnInit() { }
}
