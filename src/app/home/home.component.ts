import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    this.router.navigate(['servers']);

    // We can also add { relativeTo... } if we wish to upload relative 
    // links inside this route
    // 
    // this.router.navigate(['servers'], { relativeTo : this.route});
    //


  }

}
