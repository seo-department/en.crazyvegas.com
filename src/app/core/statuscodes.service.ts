import { Inject, Injectable, Optional } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class StatuscodesService {
  private response: Response;

  constructor(@Optional()
  @Inject(RESPONSE)
  response: any) { this.response = response; }

  /**
   * Set a status code on the response for given status code and message.
   *
   * @param {number} code
   * @param {string} message
   */
   setStatus(code: number, message?: string) {
    if (!this.response) {
      return;
    }

    this.response.statusCode = code;

    if (message) {
      this.response.statusMessage = message;
    }
  }

  /**
   * Set a 404 Not Found status code on the response
   *
   * @param {string} message
   */
  setNotFound() {
    if (!this.response) {
      return;
    }

    this.response.statusCode = 404;
  }

  setPermanentRedirect(newUrl: string) {
    if (!this.response) {
      return;
    }

    this.response.redirect(301, newUrl);
    this.response.finished = true;
    this.response.end();
  }

  /**
   * Set a 500 Internal Server Error status code on the response
   *
   * @param {string} message
   */
  setInternalServerError(message = 'Internal Server Error') {
    if (!this.response) {
      return;
    }

    this.response.statusCode = 500;
    this.response.statusMessage = message;
  }

}
