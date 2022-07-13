import { Component, OnInit, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { RESPONSE, REQUEST } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import { Request, Response } from 'express';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(@Optional() @Inject(REQUEST) private request: Request,
  @Optional() @Inject(RESPONSE) private response: Response,
  @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    // $('.col-sm-4').hide();
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }
  }

}
