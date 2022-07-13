import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {  }
  
  ngOnInit(): void {
    // $('li.nav-item.dropdown.megamenu').hover(function(){ 
    //   $('.dropdown-menu.border-0.p-0.m-0.show', this).trigger('click'); 
    // });  
    // this.getHover(); 
}

getHover(){
  $('li.nav-item.dropdown.megamenu').attr('style', 'background: #368a97 !important');
   
  
}

}
