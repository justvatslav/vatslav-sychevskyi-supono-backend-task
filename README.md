# Image API with NestJS

## Project Overview
This project demonstrates a NestJS backend that integrates with image generation APIs and uses Firebase for authentication and Firestore for data storage.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for container deployment)
- Firebase project (for Firebase Admin SDK integration)

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your Firebase project and generate a private key file for Firebase Admin SDK. Place this key in the project directory.
5. Configure your `.env` file with the necessary Firebase and API credentials.

### Running the Application
- To run the application locally:
  ```bash
  npm run start:dev
  ```
- To build the application for production:
  ```bash
  npm run build
  ```
- To start the production server:
  ```bash
  npm run start:prod
  ```

### Using Docker
- Build the Docker image:
  ```bash
  docker build -t image-api-nestjs .
  ```
- Run the application using Docker:
  ```bash
  docker run -p 3000:3000 image-api-nestjs
  ```

## API Endpoints
- `POST /generate-image`: Generates an image based on the provided text and selected API.
  - Requires Firebase authentication token in the `Authorization` header.
  - Request body should include `text` (description of the image) and `useBestAPI` (boolean indicating which API to use).

## Notes
- Ensure that all environment variables and external services are correctly configured before starting the application.