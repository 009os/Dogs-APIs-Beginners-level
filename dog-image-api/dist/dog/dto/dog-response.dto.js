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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeResponseDto = exports.DogBreedsResponseDto = exports.MultipleDogImagesResponseDto = exports.DogImageResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DogImageResponseDto {
}
exports.DogImageResponseDto = DogImageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL of the dog image',
        example: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg'
    }),
    __metadata("design:type", String)
], DogImageResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the API response',
        example: 'success'
    }),
    __metadata("design:type", String)
], DogImageResponseDto.prototype, "status", void 0);
class MultipleDogImagesResponseDto {
}
exports.MultipleDogImagesResponseDto = MultipleDogImagesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of dog image URLs',
        example: [
            'https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg',
            'https://images.dog.ceo/breeds/retriever-golden/n02099601_1025.jpg',
            'https://images.dog.ceo/breeds/retriever-golden/n02099601_1026.jpg'
        ]
    }),
    __metadata("design:type", Array)
], MultipleDogImagesResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the API response',
        example: 'success'
    }),
    __metadata("design:type", String)
], MultipleDogImagesResponseDto.prototype, "status", void 0);
class DogBreedsResponseDto {
}
exports.DogBreedsResponseDto = DogBreedsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Object containing all available dog breeds',
        example: {
            'retriever': ['golden', 'labrador'],
            'husky': [],
            'poodle': ['standard', 'miniature', 'toy']
        }
    }),
    __metadata("design:type", Object)
], DogBreedsResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the API response',
        example: 'success'
    }),
    __metadata("design:type", String)
], DogBreedsResponseDto.prototype, "status", void 0);
class WelcomeResponseDto {
}
exports.WelcomeResponseDto = WelcomeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Welcome message',
        example: '🐕 Welcome to the Dog Image Generator API! 🐕'
    }),
    __metadata("design:type", String)
], WelcomeResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Available API endpoints',
        example: {
            'GET /dogs/random': 'Get a random dog image',
            'GET /dogs/breed/:breed': 'Get a random image of a specific breed',
            'GET /dogs/multiple?count=5': 'Get multiple random dog images',
            'GET /dogs/breeds': 'Get list of all available dog breeds'
        }
    }),
    __metadata("design:type", Object)
], WelcomeResponseDto.prototype, "endpoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Example API calls',
        example: {
            'Random dog': '/dogs/random',
            'Golden retriever': '/dogs/breed/golden-retriever',
            '5 random dogs': '/dogs/multiple?count=5'
        }
    }),
    __metadata("design:type", Object)
], WelcomeResponseDto.prototype, "examples", void 0);
//# sourceMappingURL=dog-response.dto.js.map