import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserCoreModule } from 'src/core/user-core/user-core.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtMiddleware } from '../auth/middleware/jwt.middleware'
import { PassportModule } from '@nestjs/passport';
import { AtStrategy } from '../auth/startegies/jwt.staartegy';
import { AtGuard } from '../auth/guard/jwt-auth.guard';
@Module({
  imports: [ UserCoreModule,   
    JwtModule.register({
    secret: 'your_secret_key'
  }),
  PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [UserController],
  providers: [UserService, AtStrategy,AtGuard],
  exports: [UserService],
})
export class UserModule {}

export class Middleware implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*'); // Apply the JwtMiddleware to all routes in this module
  }
}
