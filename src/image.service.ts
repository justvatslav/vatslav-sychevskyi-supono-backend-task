import { Injectable, HttpService } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';

@Injectable()
export class ImageService {
    constructor(private httpService: HttpService, private firebaseService: FirebaseService) {}

    async generateImage(text: string, useBestAPI: boolean, userId: string) {
        const apiKey = useBestAPI ? process.env.API_KEY_BEST : process.env.API_KEY_WORST;
        const apiUrl = useBestAPI ? 'https://api.best-image.com/generate' : 'https://api.worst-image.com/generate';

        try {
            const response = await this.httpService.post(apiUrl, { text }, {
                headers: { 'Authorization': `Bearer ${apiKey}` }
            }).toPromise();

            const imageUrl = response.data.url;
            await this.firebaseService.getFirestore().collection('images').add({
                text,
                imageUrl,
                apiKeyUsed: apiKey,
                userId: userId
            });

            return { imageUrl };
        } catch (error) {
            console.error('Error generating image:', error);
            throw new Error('Failed to generate image');
        }
    }
}
