import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * Main application bootstrap function
 * This is the entry point of the NestJS application
 */
async function bootstrap() {
  // Create the NestJS application instance
  const app = await NestFactory.create(AppModule);

  // ========================================
  // 🚀 SWAGGER API DOCUMENTATION SETUP
  // ========================================
  // Configure Swagger documentation for the API
  const config = new DocumentBuilder()
    .setTitle('🐕 Dog Image Generator API')
    .setDescription('A beginner-friendly API that generates random dog images by fetching from the Dog API. Perfect for learning NestJS, API development, and external API integration.')
    .setVersion('1.0.0')
    .addTag('dogs', 'Dog image operations and breed management')
    .addTag('api', 'API documentation and welcome information')
    .setContact('API Developer', 'https://github.com/yourusername', 'your.email@example.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  
  // Generate Swagger documentation
  const document = SwaggerModule.createDocument(app, config);
  
  // Setup Swagger UI at /api endpoint
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: '🐕 Dog Image Generator API Docs',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestHeaders: true,
    },
  });

  // ========================================
  // 🌐 SERVER CONFIGURATION
  // ========================================
  // Get port from environment variable or use default 3000
  const port = process.env.PORT ?? 3000;
  
  // Start the server
  await app.listen(port);
  
  // ========================================
  // 📢 STARTUP MESSAGES
  // ========================================
  console.log('🚀 ========================================');
  console.log('🐕 Dog Image Generator API Started Successfully!');
  console.log('🚀 ========================================');
  console.log(`🌐 API Server: http://localhost:${port}`);
  console.log(`📚 Swagger Docs: http://localhost:${port}/api`);
  console.log(`🐕 Dog Endpoints: http://localhost:${port}/dogs`);
  console.log('🚀 ========================================');
  console.log('💡 Try visiting the Swagger docs to explore the API!');
  console.log('🚀 ========================================');
}

// Start the application
bootstrap().catch((error) => {
  console.error('❌ Failed to start the application:', error);
  process.exit(1);
});
