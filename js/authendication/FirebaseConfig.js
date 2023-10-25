import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD_t89Lm3c4PrSuiKbEVO6uVt6yM_-HF8",
  authDomain: "react-ecommerce-vivek.firebaseapp.com",
  projectId: "react-ecommerce-vivek",
  storageBucket: "react-ecommerce-vivek.appspot.com",
  messagingSenderId: "1040354117107",
  appId: "1:1040354117107:web:819fb369d8ba7688a97e86",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
