import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // as element
  // selector: '[app-servers]', // as attribute
  // selector: '.app-servers', // as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
