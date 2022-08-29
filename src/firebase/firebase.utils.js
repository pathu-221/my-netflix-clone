// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, doc, collection, setDoc } from 'firebase/firestore';

import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
signInWithEmailAndPassword,  
updateProfile} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuriiNVSTZ7o7zDJRleeNBN5SQEWlCovA",
  authDomain: "netflix-clone-2661d.firebaseapp.com",
  projectId: "netflix-clone-2661d",
  storageBucket: "netflix-clone-2661d.appspot.com",
  messagingSenderId: "274059276657",
  appId: "1:274059276657:web:d889483da395f1ef8ec6d0"
};

// Initialize Firebase

const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);



export const addUserToDatabase = async (userAuth, additionalData) => {
  if(!userAuth) return;

  try {

    const userRef = doc(db, 'users', `${userAuth.uid}`);

    await setDoc(userRef, { 
      displayName: userAuth.displayName,
      email: userAuth.email,
      ...additionalData
    }, {merge: true});


  } catch(e){
    console.log(e);
  }
}

export const createUserwithEmailandPassword = async (email, password, displayName) => {
  await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;

     await updateProfile(user, { displayName: displayName});
   
     await addUserToDatabase(user, { displayName });
  })
  .catch((error) => {
    alert(error); 
  });
}

export const signInwithEmailandPass = async (email,password ) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('signed in');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  })
}


export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  const user = result.user;
}).catch((error) => console.log(error));