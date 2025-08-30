import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';

/**
 * Main Application Module
 * 
 * This is the root module of the NestJS application that:
 * - Imports all feature modules
 * - Configures the application structure
 * - Provides global services and controllers
 * 
 * @description Root module that bootstraps the entire application
 */
@Module({
  imports: [
    // ========================================
    // 🐕 FEATURE MODULES
    // ========================================
    DogModule, // Handles all dog-related operations (images, breeds, etc.)
  ],
  controllers: [
    // ========================================
    // 🎮 CONTROLLERS
    // ========================================
    AppController, // Main application controller for root endpoints
  ],
  providers: [
    // ========================================
    // 🔧 SERVICES
    // ========================================
    AppService, // Main application service for business logic
  ],
})
export class AppModule {}
