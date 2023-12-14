import { NotFoundException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
export declare class NotFoundFilter extends BaseExceptionFilter {
    catch(exception: NotFoundException, host: any): void;
}
