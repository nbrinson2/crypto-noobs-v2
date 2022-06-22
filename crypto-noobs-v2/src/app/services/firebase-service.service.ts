import { Injectable } from '@angular/core';
import {getDatabase, ref, set} from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor() { }

  writeContactusData(id: number, firstName: string, lastName: string, email: string, message: string) {
    const db = getDatabase();
    console.log(db);
    const reference = ref(db, 'contact-us/' + id);
    
    set(reference, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      message: message,
    });
    console.log('write to db');
  }
}
