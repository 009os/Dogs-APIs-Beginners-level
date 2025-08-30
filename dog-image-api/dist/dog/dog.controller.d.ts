import { DogService } from './dog.service';
export declare class DogController {
    private readonly dogService;
    constructor(dogService: DogService);
    getRandomDogImage(): Promise<{
        message: string;
        status: string;
    }>;
    getDogImageByBreed(breed: string): Promise<{
        message: string;
        status: string;
    }>;
    getMultipleDogImages(count: string): Promise<{
        message: string[];
        status: string;
    }>;
    getAllBreeds(): Promise<{
        message: {
            [key: string]: string[];
        };
        status: string;
    }>;
    getWelcomeMessage(): Promise<{
        message: string;
        endpoints: {
            'GET /dogs/random': string;
            'GET /dogs/breed/:breed': string;
            'GET /dogs/multiple?count=5': string;
            'GET /dogs/breeds': string;
        };
        examples: {
            'Random dog': string;
            'Golden retriever': string;
            '5 random dogs': string;
        };
    }>;
}
