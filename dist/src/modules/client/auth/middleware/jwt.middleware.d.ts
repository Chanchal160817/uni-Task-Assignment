import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
export declare class JwtMiddleware implements NestMiddleware {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    private isExcludedPath;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
    private extractTokenFromRequest;
}
