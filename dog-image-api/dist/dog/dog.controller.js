"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dog_service_1 = require("./dog.service");
const dog_response_dto_1 = require("./dto/dog-response.dto");
let DogController = class DogController {
    constructor(dogService) {
        this.dogService = dogService;
    }
    async getRandomDogImage() {
        return await this.dogService.getRandomDogImage();
    }
    async getDogImageByBreed(breed) {
        return await this.dogService.getDogImageByBreed(breed);
    }
    async getMultipleDogImages(count) {
        const countNumber = parseInt(count) || 3;
        return await this.dogService.getMultipleDogImages(countNumber);
    }
    async getAllBreeds() {
        return await this.dogService.getAllBreeds();
    }
    async getWelcomeMessage() {
        return {
            message: '🐕 Welcome to the Dog Image Generator API! 🐕',
            endpoints: {
                'GET /dogs/random': 'Get a random dog image',
                'GET /dogs/breed/:breed': 'Get a random image of a specific breed',
                'GET /dogs/multiple?count=5': 'Get multiple random dog images',
                'GET /dogs/breeds': 'Get list of all available dog breeds'
            },
            examples: {
                'Random dog': '/dogs/random',
                'Golden retriever': '/dogs/breed/golden-retriever',
                '5 random dogs': '/dogs/multiple?count=5'
            }
        };
    }
};
exports.DogController = DogController;
__decorate([
    (0, common_1.Get)('random'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a random dog image', description: 'Fetches a random dog image from the Dog API' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Random dog image URL returned successfully',
        type: dog_response_dto_1.DogImageResponseDto
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getRandomDogImage", null);
__decorate([
    (0, common_1.Get)('breed/:breed'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a random image of a specific breed', description: 'Fetches a random image of the specified dog breed' }),
    (0, swagger_1.ApiParam)({ name: 'breed', description: 'Dog breed name (e.g., golden-retriever, husky, poodle)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Breed-specific dog image URL returned successfully',
        type: dog_response_dto_1.DogImageResponseDto
    }),
    __param(0, (0, common_1.Param)('breed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getDogImageByBreed", null);
__decorate([
    (0, common_1.Get)('multiple'),
    (0, swagger_1.ApiOperation)({ summary: 'Get multiple random dog images', description: 'Fetches multiple random dog images (default: 3)' }),
    (0, swagger_1.ApiQuery)({ name: 'count', description: 'Number of dog images to fetch (default: 3)', required: false, type: String }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Multiple dog image URLs returned successfully',
        type: dog_response_dto_1.MultipleDogImagesResponseDto
    }),
    __param(0, (0, common_1.Query)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getMultipleDogImages", null);
__decorate([
    (0, common_1.Get)('breeds'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all available dog breeds', description: 'Fetches a list of all available dog breeds from the Dog API' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all available dog breeds returned successfully',
        type: dog_response_dto_1.DogBreedsResponseDto
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getAllBreeds", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Welcome message and API documentation', description: 'Returns welcome message with available endpoints and examples' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Welcome message and API documentation returned successfully',
        type: dog_response_dto_1.WelcomeResponseDto
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getWelcomeMessage", null);
exports.DogController = DogController = __decorate([
    (0, swagger_1.ApiTags)('dogs'),
    (0, common_1.Controller)('dogs'),
    __metadata("design:paramtypes", [dog_service_1.DogService])
], DogController);
//# sourceMappingURL=dog.controller.js.map