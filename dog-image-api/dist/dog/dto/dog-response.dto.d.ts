export declare class DogImageResponseDto {
    message: string;
    status: string;
}
export declare class MultipleDogImagesResponseDto {
    message: string[];
    status: string;
}
export declare class DogBreedsResponseDto {
    message: {
        [key: string]: string[];
    };
    status: string;
}
export declare class WelcomeResponseDto {
    message: string;
    endpoints: {
        [key: string]: string;
    };
    examples: {
        [key: string]: string;
    };
}
