"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('🐕 Dog Image Generator API')
        .setDescription('A beginner-friendly API that generates random dog images by fetching from the Dog API')
        .setVersion('1.0')
        .addTag('dogs', 'Dog image operations')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
    console.log('🚀 Dog Image Generator API is running on http://localhost:3000');
    console.log('📚 Swagger documentation available at http://localhost:3000/api');
}
bootstrap();
//# sourceMappingURL=main.js.map