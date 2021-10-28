//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVf_VRQBkuWu_Bf9F3u2SS6hOooWAj3I",
  authDomain: "what-is-that-sound.firebaseapp.com",
  projectId: "what-is-that-sound",
  storageBucket: "what-is-that-sound.appspot.com",
  messagingSenderId: "355438466855",
  appId: "1:355438466855:web:57a82dd4d9ad550fe9bb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new GoogleAuthProvider();

function signIn(){
    return signInWithPopup(auth, provider);
}

function logOut(){
    return auth.signOut();
}

export {
    auth,
    signIn,
    logOut
}