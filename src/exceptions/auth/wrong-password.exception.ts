import { HttpStatus } from '@nestjs/common';
import {
  ExtendedHttpException,
  HttpExceptionSections,
} from '../extended-http.exception';

export class WrongPasswordException extends ExtendedHttpException {
  constructor() {
    super(HttpStatus.UNAUTHORIZED, HttpExceptionSections.auth);
  }
}
