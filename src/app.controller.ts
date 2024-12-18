import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ImageService } from './image.service';
import { FirebaseAuthGuard } from './firebase-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly imageService: ImageService) {}

  @Post('generate-image')
  @UseGuards(FirebaseAuthGuard)
  async generateImage(@Body('text') text: string, @Body('useBestAPI') useBestAPI: boolean, @Req() req) {
    return this.imageService.generateImage(text, useBestAPI, req.user.uid);
  }
}