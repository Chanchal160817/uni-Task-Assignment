// jwt.middleware.ts

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  private isExcludedPath(path: string): boolean {
    // Define paths that should be excluded from token validation
    const excludedPaths = ['/auth/login', '/auth/signup'];
    return excludedPaths.includes(path);
  }

  async use(req: Request, res: Response, next: NextFunction) {
    // Exclude paths from token validation
    if (this.isExcludedPath(req.path)) {
      return next();
    }

    const token = this.extractTokenFromRequest(req);

    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decodedToken = this.jwtService.verify(token);
      req.user = decodedToken; // Attach the user to the request for later use in controllers
      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  private extractTokenFromRequest(req: Request): string | null {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return null;
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer.toLowerCase() !== 'bearer' || !token) {
      return null;
    }

    return token;
  }
}
