import { HttpException, HttpStatus } from '@nestjs/common';

export class ExtendedHttpException extends HttpException {
  constructor(code: HttpStatus, section = HttpExceptionSections.http) {
    super(
      {
        section,
      },
      code,
    );
  }
}

export enum HttpExceptionSections {
  http = 'http',
  auth = 'auth',
}
