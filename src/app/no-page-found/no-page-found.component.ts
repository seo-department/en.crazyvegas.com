// import { Component, OnInit } from '@angular/core';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE, REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import { Request, Response } from 'express';
import { Location } from '@angular/common'
// import { SEOMetaService } from 'src/app/services/seo-meta.service';


import { CanonicalService } from '../core/canonical.service';
import { Injector } from '@angular/core';
import * as $ from 'jquery';
// import {Component, NgModule,ViewChild,ElementRef} from '@angular/core'
// import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.scss']
})
export class NoPageFoundComponent implements OnInit {
 
  constructor(private location: Location,
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response,
    @Inject(PLATFORM_ID) private platformId: any) { }
 
  
  ngOnInit(): void {
    // document.getElementById('.col-sm-4').hidden = true;
    // this.canonical.createCanonicalURL();
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }
  }

  back(): void {
    this.location.back()
  }
}
