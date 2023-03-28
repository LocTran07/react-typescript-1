// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9wfrnKciorYYySHpSWiLKr8VTjuZEFkQ",
  authDomain: "baitap1-c5a52.firebaseapp.com",
  projectId: "baitap1-c5a52",
  storageBucket: "baitap1-c5a52.appspot.com",
  messagingSenderId: "358132644828",
  appId: "1:358132644828:web:51e4f29ab93dacd276ed19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// async function getCities(db:any) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }


