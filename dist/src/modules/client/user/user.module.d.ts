import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class UserModule {
}
export declare class Middleware implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
