import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {

  constructor(private firebaseService: FirebaseServiceService,
    private db: AngularFirestore) {}

  addContactInfoToDb(formData: any) {
    this.firebaseService.writeContactusData(9, formData.firstName, formData.lastName, formData.email, formData.message);
  }

  
}
