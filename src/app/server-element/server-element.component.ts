import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {

  // Declare the input element
  @Input() serverElement: Object;
  constructor() { }

  ngOnInit() { }
}
