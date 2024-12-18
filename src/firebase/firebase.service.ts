import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private adminApp: admin.app.App;

  constructor() {
    const firebaseParams = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    };
    this.adminApp = admin.initializeApp({
      credential: admin.credential.cert(firebaseParams),
    });
  }

  getFirestore() {
    return this.adminApp.firestore();
  }

  getAuth() {
    return this.adminApp.auth();
  }
}