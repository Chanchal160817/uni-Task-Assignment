import { Catch, NotFoundException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(NotFoundException)
export class NotFoundFilter extends BaseExceptionFilter {
  catch(exception: NotFoundException, host: any) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(404).json({ message: 'URL Not Found' });
  }
}
