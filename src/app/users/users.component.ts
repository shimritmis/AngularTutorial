import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: 'Nir' },
    { id: 2, name: 'Moshe' },
    { id: 3, name: 'Zrubabel' },
    { id: 4, name: 'Yehezkel' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
