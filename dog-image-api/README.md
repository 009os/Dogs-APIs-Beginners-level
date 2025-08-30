# 🐕 Dog Image Generator API

[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Swagger](https://img.shields.io/badge/Swagger-UI-85EA2D.svg)](https://swagger.io/)

A **beginner-friendly** NestJS API that generates random dog images by fetching from the [Dog API](https://dog.ceo/dog-api/). Perfect for learning NestJS, API development, and external API integration.

## 🌟 **Features**

- 🐕 **Random Dog Images** - Get surprise dog images instantly
- 🐕‍🦺 **Breed-Specific Images** - Find images of your favorite breeds
- 📸 **Multiple Images** - Fetch multiple dog images at once
- 📋 **Breed Directory** - Discover all available dog breeds
- 📚 **Interactive Documentation** - Beautiful Swagger UI for testing
- 🚀 **Beginner-Friendly** - Well-commented code for learning
- 🔒 **Error Handling** - Robust error handling and validation
- 📖 **Type Safety** - Full TypeScript support with DTOs

## 🏗️ **Architecture**

```
src/
├── app.module.ts          # Main application module
├── main.ts               # Application bootstrap
├── dog/                  # Dog feature module
│   ├── dog.module.ts     # Dog module configuration
│   ├── dog.controller.ts # HTTP request handlers
│   ├── dog.service.ts    # Business logic & API calls
│   ├── dto/              # Data Transfer Objects
│   │   └── dog-response.dto.ts
│   └── dog.service.spec.ts # Unit tests
```

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- Basic understanding of REST APIs

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dog-image-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run start:dev
   ```

4. **Open your browser**
   - **API Server:** http://localhost:3000
   - **Swagger Docs:** http://localhost:3000/api
   - **Dog Endpoints:** http://localhost:3000/dogs

## 📚 **API Endpoints**

### **🏠 Welcome & Documentation**
- **GET** `/dogs` - Welcome message with API documentation

### **🐕 Random Dog Images**
- **GET** `/dogs/random` - Get a random dog image
- **GET** `/dogs/multiple?count=5` - Get multiple random dog images

### **🐕‍🦺 Breed-Specific Images**
- **GET** `/dogs/breed/:breed` - Get a random image of a specific breed
- **GET** `/dogs/breeds` - Get list of all available dog breeds

## 🧪 **Testing the API**

### **Using Swagger UI (Recommended)**
1. Open http://localhost:3000/api
2. Click on any endpoint
3. Click "Try it out"
4. Click "Execute"
5. See the beautiful formatted response!

### **Using curl**
```bash
# Get a random dog image
curl http://localhost:3000/dogs/random

# Get a golden retriever image
curl http://localhost:3000/dogs/breed/golden-retriever

# Get 5 random dog images
curl http://localhost:3000/dogs/multiple?count=5

# Get all available breeds
curl http://localhost:3000/dogs/breeds
```

### **Using your browser**
Simply visit the URLs in your browser to see the responses!

## 📖 **Response Examples**

### **Random Dog Image**
```json
{
  "message": "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
  "status": "success"
}
```

### **Multiple Dog Images**
```json
{
  "message": [
    "https://images.dog.ceo/breeds/retriever-golden/n02099601_1024.jpg",
    "https://images.dog.ceo/breeds/retriever-golden/n02099601_1025.jpg",
    "https://images.dog.ceo/breeds/retriever-golden/n02099601_1026.jpg"
  ],
  "status": "success"
}
```

### **All Breeds**
```json
{
  "message": {
    "retriever": ["golden", "labrador"],
    "husky": [],
    "poodle": ["standard", "miniature", "toy"]
  },
  "status": "success"
}
```

## 🛠️ **Development**

### **Available Scripts**
```bash
# Development
npm run start:dev    # Start with hot reload
npm run start        # Start production server
npm run start:debug  # Start with debugging

# Building
npm run build        # Build the application
npm run start:prod   # Start built application

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:cov     # Run tests with coverage
npm run test:e2e     # Run end-to-end tests

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### **Project Structure**
```
dog-image-api/
├── src/                    # Source code
│   ├── app.module.ts      # Root module
│   ├── main.ts            # Application entry point
│   └── dog/               # Dog feature module
│       ├── dog.module.ts  # Module configuration
│       ├── dog.controller.ts # HTTP controllers
│       ├── dog.service.ts # Business logic
│       ├── dto/           # Data Transfer Objects
│       └── *.spec.ts      # Unit tests
├── test/                  # E2E tests
├── dist/                  # Built application
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── nest-cli.json          # NestJS CLI configuration
└── README.md              # This file
```

## 🎯 **Learning Points**

This API demonstrates key concepts for beginners:

### **🏗️ Architecture & Design**
- **Modular Design** - Feature-based module organization
- **Dependency Injection** - NestJS IoC container usage
- **Separation of Concerns** - Controller, Service, Module separation

### **🌐 API Development**
- **RESTful Design** - Proper HTTP methods and status codes
- **Parameter Handling** - Path parameters, query parameters
- **Error Handling** - Comprehensive error management
- **Validation** - Input validation and sanitization

### **📚 Documentation & Testing**
- **Swagger Integration** - Interactive API documentation
- **DTOs** - Data Transfer Objects for type safety
- **Unit Testing** - Jest testing framework usage
- **Code Comments** - Comprehensive documentation

### **🔧 External API Integration**
- **HTTP Client** - Axios for external API calls
- **Error Handling** - Graceful handling of external API failures
- **Response Mapping** - Transforming external API responses

## 🚀 **Next Steps & Extensions**

### **Beginner Level**
- [ ] Add more dog breeds and images
- [ ] Implement basic caching
- [ ] Add rate limiting
- [ ] Create a simple frontend

### **Intermediate Level**
- [ ] Add user authentication
- [ ] Implement image favorites
- [ ] Add image metadata storage
- [ ] Create admin panel

### **Advanced Level**
- [ ] Add image processing (resize, filters)
- [ ] Implement machine learning for breed detection
- [ ] Add real-time notifications
- [ ] Create mobile app

## 🔧 **Configuration**

### **Environment Variables**
```bash
# .env file
PORT=3000                    # Server port (default: 3000)
NODE_ENV=development         # Environment (development/production)
```

### **Swagger Configuration**
The API documentation is automatically generated and available at `/api` endpoint. You can customize it in `main.ts`.

## 🐛 **Troubleshooting**

### **Common Issues**

1. **Port already in use**
   ```bash
   # Kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Dependencies not installed**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check TypeScript compilation
   npm run build
   ```

### **Getting Help**
- Check the console logs for error messages
- Verify all dependencies are installed
- Ensure you're in the correct directory
- Check the Swagger docs at `/api` for endpoint information

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Dog API](https://dog.ceo/dog-api/) - Free dog image API
- [Swagger](https://swagger.io/) - API documentation framework
- [Axios](https://axios-http.com/) - HTTP client library

## 📞 **Support**

- **Documentation:** Visit `/api` for interactive API docs
- **Issues:** Create an issue on GitHub
- **Questions:** Check the code comments for detailed explanations

---

**Happy coding! 🐕✨**

*Built with ❤️ for beginners learning API development*
