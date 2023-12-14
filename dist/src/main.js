"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const helmet_1 = require("helmet");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./shared/modules/prisma/prisma.service");
const not_found_middleware_1 = require("./not.found.middleware");
async function bootstrap() {
    var _a, _b, _c;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const configService = app.get(config_1.ConfigService);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.use((0, helmet_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('UniTask')
        .setDescription('UniTask Assigment')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: configService.get('*'),
        credentials: true,
    });
    app.useGlobalFilters(new not_found_middleware_1.NotFoundFilter());
    await app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
    console.log(`Nest App Started on ${(_b = process.env.PORT) !== null && _b !== void 0 ? _b : 3000}`);
    console.log(`http://localhost:${(_c = process.env.PORT) !== null && _c !== void 0 ? _c : 3000}/api/`);
}
bootstrap();
//# sourceMappingURL=main.js.map