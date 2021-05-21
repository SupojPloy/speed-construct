import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser: firebase.User;

  constructor(public  router:  Router, public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.authUser = user;
      }
    });
  }

  isAuthenticated(): boolean {
    return this.authUser !== null;
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('Login completed');
      this.authUser = userCredential.user;
      this.router.navigate(['/portfolio']);
    })
    .catch(error => {
      this.authUser = null;
      console.log('Login error: ', error.message);
    });
  }
}
