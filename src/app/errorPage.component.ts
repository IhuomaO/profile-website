import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  template: `
         <div class='error'>
         404 ERROR PAGE
         </div>
  `
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
