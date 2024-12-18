import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ImageService } from './image.service';
import { FirebaseAuthGuard } from './firebase-auth.guard';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  controllers: [AppController],
  providers: [ImageService, FirebaseAuthGuard],
})
export class AppModule {}