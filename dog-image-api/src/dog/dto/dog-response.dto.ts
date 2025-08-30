import { ApiProperty } from '@nestjs/swagger';

/**
 * Data Transfer Objects (DTOs) for Dog API Responses
 * 
 * These DTOs define the structure and documentation for all API responses.
 * They provide:
 * - Type safety for TypeScript
 * - Detailed Swagger documentation
 * - Clear examples for developers
 * - Consistent response structure
 * 
 * @description Response schemas for the Dog Image Generator API
 */

/**
 * Response DTO for single dog image endpoints
 * Used by /dogs/random and /dogs/breed/:breed endpoints
 * 
 * @example
 * {
 *   "message": "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
 *   "status": "success"
 * }
 */
export class DogImageResponseDto {
  @ApiProperty({
    description: 'URL of the dog image from the Dog API',
    example: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg',
    type: String,
    format: 'uri'
  })
  message: string;

  @ApiProperty({
    description: 'Status of the API response from the Dog API',
    example: 'success',
    type: String,
    enum: ['success', 'error']
  })
  status: string;
}

/**
 * Response DTO for multiple dog images endpoint
 * Used by /dogs/multiple endpoint
 * 
 * @example
 * {
 *   "message": [
 *     "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
 *     "https://images.dog.ceo/breeds/retriever-golden/n02099601_1025.jpg",
 *     "https://images.dog.ceo/breeds/retriever-golden/n02099601_1026.jpg"
 *   ],
 *   "status": "success"
 * }
 */
export class MultipleDogImagesResponseDto {
  @ApiProperty({
    description: 'Array of dog image URLs from the Dog API',
    example: [
      'https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg',
      'https://images.dog.ceo/breeds/retriever-golden/n02099601_1025.jpg',
      'https://images.dog.ceo/breeds/retriever-golden/n02099601_1026.jpg'
    ],
    type: [String],
    isArray: true,
    minItems: 1,
    maxItems: 50
  })
  message: string[];

  @ApiProperty({
    description: 'Status of the API response from the Dog API',
    example: 'success',
    type: String,
    enum: ['success', 'error']
  })
  status: string;
}

/**
 * Response DTO for dog breeds listing endpoint
 * Used by /dogs/breeds endpoint
 * 
 * @example
 * {
 *   "message": {
 *     "retriever": ["golden", "labrador"],
 *     "husky": [],
 *     "poodle": ["standard", "miniature", "toy"]
 *   },
 *   "status": "success"
 * }
 */
export class DogBreedsResponseDto {
  @ApiProperty({
    description: 'Object containing all available dog breeds organized by category. Each key is a breed category, and the value is an array of sub-breeds.',
    example: {
      'retriever': ['golden', 'labrador'],
      'husky': [],
      'poodle': ['standard', 'miniature', 'toy'],
      'shepherd': ['german', 'australian'],
      'terrier': ['jack-russell', 'bull', 'yorkshire']
    },
    type: 'object',
    additionalProperties: {
      type: 'array',
      items: { type: 'string' }
    }
  })
  message: { [key: string]: string[] };

  @ApiProperty({
    description: 'Status of the API response from the Dog API',
    example: 'success',
    type: String,
    enum: ['success', 'error']
  })
  status: string;
}

/**
 * Response DTO for welcome and documentation endpoint
 * Used by /dogs endpoint (root)
 * 
 * @example
 * {
 *   "message": "🐕 Welcome to the Dog Image Generator API! 🐕",
 *   "description": "A beginner-friendly API that generates random dog images...",
 *   "version": "1.0.0",
 *   "endpoints": { ... },
 *   "examples": { ... },
 *   "documentation": "Visit /api for interactive Swagger documentation",
 *   "externalApi": "Powered by Dog API (https://dog.ceo/dog-api/)"
 * }
 */
export class WelcomeResponseDto {
  @ApiProperty({
    description: 'Welcome message for the API',
    example: '🐕 Welcome to the Dog Image Generator API! 🐕',
    type: String
  })
  message: string;

  @ApiProperty({
    description: 'Brief description of what the API does',
    example: 'A beginner-friendly API that generates random dog images by fetching from the Dog API',
    type: String
  })
  description: string;

  @ApiProperty({
    description: 'Current version of the API',
    example: '1.0.0',
    type: String
  })
  version: string;

  @ApiProperty({
    description: 'Available API endpoints with their descriptions',
    example: {
      'GET /dogs/random': 'Get a random dog image',
      'GET /dogs/breed/:breed': 'Get a random image of a specific breed',
      'GET /dogs/multiple?count=5': 'Get multiple random dog images',
      'GET /dogs/breeds': 'Get list of all available dog breeds'
    },
    type: 'object',
    additionalProperties: { type: 'string' }
  })
  endpoints: { [key: string]: string };

  @ApiProperty({
    description: 'Example API calls with their endpoints',
    example: {
      'Random dog': '/dogs/random',
      'Golden retriever': '/dogs/breed/golden-retriever',
      '5 random dogs': '/dogs/multiple?count=5',
      'All breeds': '/dogs/breeds'
    },
    type: 'object',
    additionalProperties: { type: 'string' }
  })
  examples: { [key: string]: string };

  @ApiProperty({
    description: 'Information about where to find detailed documentation',
    example: 'Visit /api for interactive Swagger documentation',
    type: String
  })
  documentation: string;

  @ApiProperty({
    description: 'Information about the external API being used',
    example: 'Powered by Dog API (https://dog.ceo/dog-api/)',
    type: String
  })
  externalApi: string;
}
