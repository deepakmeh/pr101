// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBND1ONyb-aEzu24xkT0-pZ-zmc8cxdras",
    authDomain: "anant-8f69b.firebaseapp.com",
    databaseURL: "https://anant-8f69b-default-rtdb.firebaseio.com",
    projectId: "anant-8f69b",
    storageBucket: "anant-8f69b.appspot.com",
    messagingSenderId: "517751273272",
    appId: "1:517751273272:web:750251b10dfc5137d073cd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



