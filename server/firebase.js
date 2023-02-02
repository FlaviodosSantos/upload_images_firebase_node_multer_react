const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyHamg6Z--mRnEQMkOB04vXBAJtk18VZI",
  authDomain: "file-uploads-775fe.firebaseapp.com",
  projectId: "file-uploads-775fe",
  storageBucket: "file-uploads-775fe.appspot.com",
  messagingSenderId: "1003746504962",
  appId: "1:1003746504962:web:7b85418f6c57eeca94d21b",
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
module.exports = getStorage(firebaseApp);
