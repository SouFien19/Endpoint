import { Component, OnInit } from '@angular/core';

declare function layers(): any;
declare function drop():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  ngOnInit() {
    layers();
    drop();
  }

}

