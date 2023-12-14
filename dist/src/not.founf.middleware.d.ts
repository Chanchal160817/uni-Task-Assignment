import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class NotFoundMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
