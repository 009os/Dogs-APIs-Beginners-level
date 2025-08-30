import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

/**
 * Dog Feature Module
 * 
 * This module encapsulates all dog-related functionality including:
 * - Dog image generation and retrieval
 * - Breed-specific image fetching
 * - Multiple image handling
 * - Breed listing operations
 * 
 * @description Feature module for dog image generation and breed management
 */
@Module({
  controllers: [
    // ========================================
    // 🎮 DOG CONTROLLERS
    // ========================================
    DogController, // Handles HTTP requests for dog-related operations
  ],
  providers: [
    // ========================================
    // 🔧 DOG SERVICES
    // ========================================
    DogService, // Contains business logic for dog API operations
  ],
  // Note: No exports needed as this module is only used internally
})
export class DogModule {}
