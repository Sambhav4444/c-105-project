//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCJehMn13Yax4PMszmYGuNUJLXkQJw0y10",
      authDomain: "kwit-53a6c.firebaseapp.com",
      databaseURL: "https://kwit-53a6c-default-rtdb.firebaseio.com",
      projectId: "kwit-53a6c",
      storageBucket: "kwit-53a6c.appspot.com",
      messagingSenderId: "947297890986",
      appId: "1:947297890986:web:28881d696b186bd1d916d3"
    };


    const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData()
{
      firebase.database().ref("/"+room_name).on('value',function(snapshot)
      {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
                  childKey = childSnapshot.key; childData
            }
      })
}