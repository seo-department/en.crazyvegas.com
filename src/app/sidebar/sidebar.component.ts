import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  max ="https://imgix.cosmicjs.com/7b5e3ef0-280e-11ec-991b-c733c45c4ab0-casino-max-exclusive-bonus.jpg";
  el_royal ="https://imgix.cosmicjs.com/64894bf0-2810-11ec-991b-c733c45c4ab0-el-royale-promo.gif";

  constructor() { }

  ngOnInit(): void {
  }

}
