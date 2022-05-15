import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyC_ZYscbz3vRfRDSpddwNceAtollUxf7LQ",
	authDomain: "project-comsol.firebaseapp.com",
	projectId: "project-comsol",
	storageBucket: "project-comsol.appspot.com",
	messagingSenderId: "1007870649691",
	appId: "1:1007870649691:web:4f008c2fd7c0cb108e267e",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
