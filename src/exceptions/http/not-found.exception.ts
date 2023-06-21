import { HttpStatus } from '@nestjs/common';
import { ExtendedHttpException } from '../extended-http.exception';

export class NotFoundException extends ExtendedHttpException {
  constructor() {
    super(HttpStatus.NOT_FOUND);
  }
}
