import { Injectable } from '@nestjs/common';
import axios from 'axios';

/**
 * Dog Service
 * 
 * This service handles all business logic related to dog operations:
 * - Fetches dog images from external Dog API
 * - Manages API communication and error handling
 * - Provides data transformation and validation
 * 
 * @description Service layer for dog image generation and breed management
 */
@Injectable()
export class DogService {
  /**
   * Base URL for the Dog API
   * The Dog API is a free service that provides dog images and breed information
   * @see https://dog.ceo/dog-api/
   */
  private readonly dogApiBaseUrl = 'https://dog.ceo/api';

  /**
   * Fetches a random dog image from the Dog API
   * 
   * @returns Promise containing the image URL and status
   * @throws Error if the API request fails
   * 
   * @example
   * const result = await dogService.getRandomDogImage();
   * // Returns: { message: "https://...", status: "success" }
   */
  async getRandomDogImage(): Promise<{ message: string; status: string }> {
    try {
      // Make HTTP GET request to Dog API for random image
      const response = await axios.get(`${this.dogApiBaseUrl}/breeds/image/random`);
      
      // Return the API response data
      return response.data;
    } catch (error) {
      // Log the error for debugging (in production, you might want to use a logger)
      console.error('Error fetching random dog image:', error);
      
      // Throw a user-friendly error message
      throw new Error('Failed to fetch dog image. Please try again later.');
    }
  }

  /**
   * Fetches a random image of a specific dog breed
   * 
   * @param breed - The dog breed name (e.g., 'golden-retriever', 'husky')
   * @returns Promise containing the breed-specific image URL and status
   * @throws Error if the API request fails or breed is invalid
   * 
   * @example
   * const result = await dogService.getDogImageByBreed('golden-retriever');
   * // Returns: { message: "https://...", status: "success" }
   */
  async getDogImageByBreed(breed: string): Promise<{ message: string; status: string }> {
    try {
      // Validate breed parameter
      if (!breed || breed.trim().length === 0) {
        throw new Error('Breed parameter is required');
      }

      // Make HTTP GET request to Dog API for breed-specific image
      const response = await axios.get(`${this.dogApiBaseUrl}/breed/${breed}/images/random`);
      
      // Return the API response data
      return response.data;
    } catch (error) {
      // Log the error for debugging
      console.error(`Error fetching ${breed} dog image:`, error);
      
      // Check if it's an axios error (API error)
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        throw new Error(`Breed '${breed}' not found. Please check the breed name and try again.`);
      }
      
      // Throw a generic error for other failures
      throw new Error(`Failed to fetch ${breed} dog image. Please try again later.`);
    }
  }

  /**
   * Fetches multiple random dog images
   * 
   * @param count - Number of images to fetch (defaults to 3 if not specified)
   * @returns Promise containing an array of image URLs and status
   * @throws Error if the API request fails
   * 
   * @example
   * const result = await dogService.getMultipleDogImages(5);
   * // Returns: { message: ["https://...", "https://..."], status: "success" }
   */
  async getMultipleDogImages(count: number = 3): Promise<{ message: string[]; status: string }> {
    try {
      // Validate count parameter
      if (count < 1 || count > 50) {
        throw new Error('Count must be between 1 and 50');
      }

      // Make HTTP GET request to Dog API for multiple random images
      const response = await axios.get(`${this.dogApiBaseUrl}/breeds/image/random/${count}`);
      
      // Return the API response data
      return response.data;
    } catch (error) {
      // Log the error for debugging
      console.error(`Error fetching ${count} dog images:`, error);
      
      // Throw a user-friendly error message
      throw new Error(`Failed to fetch ${count} dog images. Please try again later.`);
    }
  }

  /**
   * Fetches a list of all available dog breeds
   * 
   * @returns Promise containing all available breeds organized by category
   * @throws Error if the API request fails
   * 
   * @example
   * const result = await dogService.getAllBreeds();
   * // Returns: { message: { "retriever": ["golden", "labrador"], ... }, status: "success" }
   */
  async getAllBreeds(): Promise<{ message: { [key: string]: string[] }; status: string }> {
    try {
      // Make HTTP GET request to Dog API for all breeds
      const response = await axios.get(`${this.dogApiBaseUrl}/breeds/list/all`);
      
      // Return the API response data
      return response.data;
    } catch (error) {
      // Log the error for debugging
      console.error('Error fetching dog breeds:', error);
      
      // Throw a user-friendly error message
      throw new Error('Failed to fetch dog breeds. Please try again later.');
    }
  }
}
