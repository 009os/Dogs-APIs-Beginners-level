import { Test, TestingModule } from '@nestjs/testing';
import { DogService } from './dog.service';

/**
 * Dog Service Test Suite
 * 
 * This test file contains unit tests for the DogService class.
 * Tests cover:
 * - Service instantiation
 * - Service configuration
 * - Basic functionality validation
 * 
 * @description Unit tests for DogService to ensure proper functionality
 */
describe('DogService', () => {
  let service: DogService;

  /**
   * Setup function that runs before each test
   * Creates a fresh instance of DogService for each test
   */
  beforeEach(async () => {
    // Create a testing module with DogService
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogService],
    }).compile();

    // Get the DogService instance from the testing module
    service = module.get<DogService>(DogService);
  });

  /**
   * Test: Service should be properly defined
   * Ensures the service is instantiated correctly
   */
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /**
   * Test: Service should have correct API base URL
   * Verifies the service is configured with the right external API endpoint
   */
  it('should have dogApiBaseUrl defined', () => {
    // Access the private property to verify configuration
    expect(service['dogApiBaseUrl']).toBe('https://dog.ceo/api');
  });

  /**
   * Test: Service should have correct API base URL format
   * Ensures the URL is a valid HTTP/HTTPS URL
   */
  it('should have valid dogApiBaseUrl format', () => {
    const url = service['dogApiBaseUrl'];
    expect(url).toMatch(/^https?:\/\/.+/);
  });

  /**
   * Test: Service should be an instance of DogService
   * Verifies the service is of the correct type
   */
  it('should be an instance of DogService', () => {
    expect(service).toBeInstanceOf(DogService);
  });
});
