export declare class DogService {
    private readonly dogApiBaseUrl;
    getRandomDogImage(): Promise<{
        message: string;
        status: string;
    }>;
    getDogImageByBreed(breed: string): Promise<{
        message: string;
        status: string;
    }>;
    getMultipleDogImages(count?: number): Promise<{
        message: string[];
        status: string;
    }>;
    getAllBreeds(): Promise<{
        message: {
            [key: string]: string[];
        };
        status: string;
    }>;
}
