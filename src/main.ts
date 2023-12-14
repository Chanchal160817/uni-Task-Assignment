import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { PrismaService } from './shared/modules/prisma/prisma.service';
import { NotFoundFilter } from './not.found.middleware'
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.use(helmet());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('UniTask')
    .setDescription('UniTask Assigment')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: configService.get('*'),
    credentials: true,
  }); 
  app.useGlobalFilters(new NotFoundFilter());

  await app.listen(process.env.PORT ?? 3000);

  console.log(`Nest App Started on ${process.env.PORT ?? 3000}`);
  console.log(`http://localhost:${process.env.PORT ?? 3000}/api/`);
}
bootstrap();
