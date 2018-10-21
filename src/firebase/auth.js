import { auth } from './firebase';

// SIGN UP
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// SIGN IN
export const doSignInUserWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// SIGN OUT
export const doSignOut = () =>
  auth.signOut();

// PASSWORD RESET
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// PASSWORD CHANGE
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);