import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { DogService } from './dog.service';
import { 
  DogImageResponseDto, 
  MultipleDogImagesResponseDto, 
  DogBreedsResponseDto, 
  WelcomeResponseDto 
} from './dto/dog-response.dto';

/**
 * Dog Controller
 * 
 * This controller handles all HTTP requests related to dog operations:
 * - Random dog image generation
 * - Breed-specific image retrieval
 * - Multiple image fetching
 * - Breed listing and information
 * - Welcome and documentation endpoints
 * 
 * @description REST API controller for dog image generation and breed management
 */
@ApiTags('dogs') // Groups all dog endpoints under 'dogs' tag in Swagger
@Controller('dogs')
export class DogController {
  /**
   * Constructor with dependency injection
   * @param dogService - Service that handles dog-related business logic
   */
  constructor(private readonly dogService: DogService) {}

  /**
   * GET /dogs/random
   * 
   * Fetches a random dog image from the Dog API
   * This endpoint is perfect for getting surprise dog images
   * 
   * @returns Promise containing a random dog image URL and status
   */
  @Get('random')
  @ApiOperation({ 
    summary: 'Get a random dog image', 
    description: 'Fetches a random dog image from the Dog API. Perfect for getting surprise dog images or testing the API.' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Random dog image URL returned successfully',
    type: DogImageResponseDto
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error or Dog API unavailable' 
  })
  async getRandomDogImage() {
    return await this.dogService.getRandomDogImage();
  }

  /**
   * GET /dogs/breed/:breed
   * 
   * Fetches a random image of a specific dog breed
   * Useful for getting images of particular breeds you're interested in
   * 
   * @param breed - The dog breed name (e.g., 'golden-retriever', 'husky', 'poodle')
   * @returns Promise containing a breed-specific dog image URL and status
   */
  @Get('breed/:breed')
  @ApiOperation({ 
    summary: 'Get a random image of a specific breed', 
    description: 'Fetches a random image of the specified dog breed. Useful for getting images of particular breeds you\'re interested in.' 
  })
  @ApiParam({ 
    name: 'breed', 
    description: 'Dog breed name (e.g., golden-retriever, husky, poodle, labrador, german-shepherd)',
    example: 'golden-retriever'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Breed-specific dog image URL returned successfully',
    type: DogImageResponseDto
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Invalid breed parameter' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Breed not found' 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error or Dog API unavailable' 
  })
  async getDogImageByBreed(@Param('breed') breed: string) {
    return await this.dogService.getDogImageByBreed(breed);
  }

  /**
   * GET /dogs/multiple
   * 
   * Fetches multiple random dog images
   * Great for getting a collection of dog images at once
   * 
   * @param count - Number of dog images to fetch (optional, defaults to 3, max 50)
   * @returns Promise containing an array of dog image URLs and status
   */
  @Get('multiple')
  @ApiOperation({ 
    summary: 'Get multiple random dog images', 
    description: 'Fetches multiple random dog images. Great for getting a collection of dog images at once. Default count is 3, maximum is 50.' 
  })
  @ApiQuery({ 
    name: 'count', 
    description: 'Number of dog images to fetch (default: 3, max: 50)', 
    required: false, 
    type: String,
    example: '5'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Multiple dog image URLs returned successfully',
    type: MultipleDogImagesResponseDto
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Invalid count parameter (must be 1-50)' 
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error or Dog API unavailable' 
  })
  async getMultipleDogImages(@Query('count') count: string) {
    // Parse count parameter and set default value
    const countNumber = parseInt(count) || 3;
    return await this.dogService.getMultipleDogImages(countNumber);
  }

  /**
   * GET /dogs/breeds
   * 
   * Fetches a list of all available dog breeds
   * Useful for discovering what breeds are available in the API
   * 
   * @returns Promise containing all available dog breeds organized by category
   */
  @Get('breeds')
  @ApiOperation({ 
    summary: 'Get all available dog breeds', 
    description: 'Fetches a list of all available dog breeds from the Dog API. Useful for discovering what breeds are available and planning your API calls.' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'List of all available dog breeds returned successfully',
    type: DogBreedsResponseDto
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Internal server error or Dog API unavailable' 
  })
  async getAllBreeds() {
    return await this.dogService.getAllBreeds();
  }

  /**
   * GET /dogs
   * 
   * Welcome endpoint that provides API documentation and examples
   * This is the main entry point for users to understand the API
   * 
   * @returns Welcome message with available endpoints and examples
   */
  @Get()
  @ApiOperation({ 
    summary: 'Welcome message and API documentation', 
    description: 'Returns welcome message with available endpoints and examples. This is the main entry point for users to understand how to use the API.' 
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Welcome message and API documentation returned successfully',
    type: WelcomeResponseDto
  })
  async getWelcomeMessage() {
    return {
      message: '🐕 Welcome to the Dog Image Generator API! 🐕',
      description: 'A beginner-friendly API that generates random dog images by fetching from the Dog API',
      version: '1.0.0',
      endpoints: {
        'GET /dogs/random': 'Get a random dog image',
        'GET /dogs/breed/:breed': 'Get a random image of a specific breed',
        'GET /dogs/multiple?count=5': 'Get multiple random dog images',
        'GET /dogs/breeds': 'Get list of all available dog breeds'
      },
      examples: {
        'Random dog': '/dogs/random',
        'Golden retriever': '/dogs/breed/golden-retriever',
        '5 random dogs': '/dogs/multiple?count=5',
        'All breeds': '/dogs/breeds'
      },
      documentation: 'Visit /api for interactive Swagger documentation',
      externalApi: 'Powered by Dog API (https://dog.ceo/dog-api/)'
    };
  }
}
