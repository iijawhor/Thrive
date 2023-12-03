import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDgJljoxvj_2C8FZc8YK40qvtLzDmoNCus",
  authDomain: "thrive-6f6ba.firebaseapp.com",
  projectId: "thrive-6f6ba",
  storageBucket: "thrive-6f6ba.appspot.com",
  messagingSenderId: "1043152203317",
  appId: "1:1043152203317:web:b6ec99f745d6455d6c8b7c",
  measurementId: "G-7JXTSQWH7M",
  databaseURL: "https://thrive-6f6ba-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
