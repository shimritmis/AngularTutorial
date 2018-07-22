import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  // Add the current router to the CTOR
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the data from the router.
    // Fetch the data from the route
    this.user = {
      id: this.route.snapshot.params['user_id'],
      name: this.route.snapshot.params['user_name'],
    }
  }

}
