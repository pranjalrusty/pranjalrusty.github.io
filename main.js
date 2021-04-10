  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1XQNgMDUKTqU0Qjnv84-RdsI5eJEu3qQ",
    authDomain: "webapp-3cb53.firebaseapp.com",
    projectId: "webapp-3cb53",
    storageBucket: "webapp-3cb53.appspot.com",
    messagingSenderId: "569714629045",
    appId: "1:569714629045:web:7e463b946ccaa048eee1fc"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signup(){
	var email=document.getElementById("email1");
	var password=document.getElementById("pass1");

	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));


  }

  function signIn(){
		
	var email = document.getElementById("email2");
	var password = document.getElementById("pass2");
	
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
	
	alert("welcome");
	window.location.replace("signin.html");


  }

  auth.onAuthStateChanged(function(user){
		
	if(user){
		
		var email = user.email;
		
		window.location.replace("signup.html");

		//is signed in
		
	}else{
		
		//no user is signed in
	}
	
	
	
});

	function signOut(){
		
		auth.signOut();
		alert("logged out");
		
		
	}



	




	
	
