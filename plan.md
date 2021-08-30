Setup steps

1. Create the boxes we need to create (Done)
2. Create the banner background image (Done)
3. Create the header (Done)
4. Create the input section (Done)
5. Create the todoItems list section (Done)
6. Set up our database (Done)
7. Create the ability to save data in a firebase database (Done)
8. Create the functionality to grab the data from the database (Done)
9. Create the functionality to update the data with the new status of completed or active (Done)

## the following is firebase code

// error needs to fix

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqEBhw11FT9lfq6g9bPdpoLMubWouxFgg",
    authDomain: "todo-812e2.firebaseapp.com",
    projectId: "todo-812e2",
    storageBucket: "todo-812e2.appspot.com",
    messagingSenderId: "465941618736",
    appId: "1:465941618736:web:ef4515c5248391bdd24df5",
    measurementId: "G-EQQCT9PL5E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
