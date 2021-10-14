import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor() { }


  ngOnInit(): void {
    console.log();
    this.call();
    
  }
  ngOnChanges(){
    console.log();
    this.call();
  }

  call(){
   
  }


}
