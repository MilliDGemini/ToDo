//firebase code

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDqEBhw11FT9lfq6g9bPdpoLMubWouxFgg",
  authDomain: "todo-812e2.firebaseapp.com",
  projectId: "todo-812e2",
  storageBucket: "todo-812e2.appspot.com",
  messagingSenderId: "465941618736",
  appId: "1:465941618736:web:ef4515c5248391bdd24df5",
  measurementId: "G-EQQCT9PL5E",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

// done()
