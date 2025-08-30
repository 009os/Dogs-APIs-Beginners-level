"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DogService = class DogService {
    constructor() {
        this.dogApiBaseUrl = 'https://dog.ceo/api';
    }
    async getRandomDogImage() {
        try {
            const response = await axios_1.default.get(`${this.dogApiBaseUrl}/breeds/image/random`);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch dog image');
        }
    }
    async getDogImageByBreed(breed) {
        try {
            const response = await axios_1.default.get(`${this.dogApiBaseUrl}/breed/${breed}/images/random`);
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch ${breed} dog image`);
        }
    }
    async getMultipleDogImages(count = 3) {
        try {
            const response = await axios_1.default.get(`${this.dogApiBaseUrl}/breeds/image/random/${count}`);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch multiple dog images');
        }
    }
    async getAllBreeds() {
        try {
            const response = await axios_1.default.get(`${this.dogApiBaseUrl}/breeds/list/all`);
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch dog breeds');
        }
    }
};
exports.DogService = DogService;
exports.DogService = DogService = __decorate([
    (0, common_1.Injectable)()
], DogService);
//# sourceMappingURL=dog.service.js.map