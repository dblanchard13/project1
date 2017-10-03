//index.html

  var config = {
    apiKey: "AIzaSyC4rEhm8qm_Bxej5hNuUBsV8c0sTDpeWlY",
    authDomain: "project01-963de.firebaseapp.com",
    databaseURL: "https://project01-963de.firebaseio.com",
    projectId: "project01-963de",
    storageBucket: "project01-963de.appspot.com",
    messagingSenderId: "918836521214"
  };
  firebase.initializeApp(config);


    // ================================================================================

    // Get a reference to the database service
    var database = firebase.database();



    // connectionsRef references a specific location in our database.
    // All of our connections will be stored in this directory.
    var connectionsRef = database.ref("/connections");

    // '.info/connected' is a special location provided by Firebase that is updated
    // every time the client's connection state changes.
    // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
    var connectedRef = database.ref(".info/connected");

    connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#connected-admins").html(snap.numChildren());
});

    //  Button for adding Trains
$("#submitid").on("click", function(event) {
  event.preventDefault();

  var newName = $("#user-name").val().trim();
  var newEmail = $("#email").val().trim();
  
  

  


 // Creates local "temporary" object for holding trains data
  var newuser = {
    newName: newName,
    newEmail: newEmail ,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  };

  // Uploads trains data to the database
  database.ref('/user').push(newuser);

  

   // Clears all of the text-boxes
  $("#user-name").val("");
  $("#email").val("");

})

// Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref('/user').on("child_added", function(childSnapshot) {

  // Store everything into a variable.
  var userName = childSnapshot.val().newName;
  var useremail= childSnapshot.val().newEmail;
 
 $("#user-table> tbody").append("<tr><td>" + userName + "</td><td>"+ useremail +"</td></tr>");
  }, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});



















//index.html
//----Geoindex---
(function() {
    var cx = '012033538369567141577:jswhd2vhhfe';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();


 window.onload = function() {
    
  $("#line1").html('<button type="button" id="startbutton" class="btn btn-success btn-block">Start</button>')
    $("#startbutton").click(startgame);
  };

  function startgame(){
    $("#line1").empty();  
    nextquestion();
  };

  
  var question=["You are in a Country that's dark all day for 60 days straight. what country are you in?"
  ,"If you were to drive 680 miles south and 400 miles west from this latitude 60.192059, and longitude 24.945831. what country would you be in?"
  ,"If you guessed correctly the pervious queston then this question so be easy hahahahaha. What is the number one landmark in this country?"
  ,"This landmark has a envelope with directions that will land you in a country that has the Petronas twin towers. what country is this?"
  ,"who was the president of Uganda in 1972?"]
   var choice1=["Denmark","Denmark","Gendarmenmarkt","Dubai","Richard Nixon"]
   var choice2=[" Iceland","Poland","Jewish Ghetto Memorial","China","Yoweri Museveni"]
   var choice3=["Russia","Germany","Cumil","Malaysia","Idi Amin"]
   var choice4=["Finland","Slovakia","Roskilde Cathedra","Phillipines","Milton Obote"]
   var answer=["Finland","Germany","Gendarmaenmarkt","Malaysia","Idi Amin"]
   var i=0;
   var useranswer=[]

   function nextquestion(){ 
    $("#line1").addClass("text-center")
    $("#line1").html(question[i]);
    $("#line2").html('<button type="button" id="choice1" class="btn btn-success btn-lg btn-block">'+choice1[i])+'</button>';
    $("#line3").html('<button type="button" id="choice2" class="btn btn-success btn-lg btn-block">'+choice2[i])+'</button>';
    $("#line4").html('<button type="button" id="choice3" class="btn btn-success btn-lg btn-block">'+choice3[i])+'</button>';
    $("#line5").html('<button type="button" id="choice4" class="btn btn-success btn-lg btn-block">'+choice4[i])+'</button>';
    $("#choice1").click(check1);
    $("#choice2").click(check2);
    $("#choice3").click(check3);
    $("#choice4").click(check4);
     if(i==question.length){     //end page
     
      $("#line1").html("-GAME END!-");
      $("#line2").html("Correct: ");
      $("#line3").html("Incorrect: ");
      $("#line4").empty();
      $("#line5").empty();
    }};

   function check1(){
     useranswer.push(choice1[i])
     clear()
     nextquestion() 
   }
   function check2(){
     useranswer.push(choice1[i])
     clear()
     nextquestion() 
   }
   function check3(){
     useranswer.push(choice1[i])
     clear()
     nextquestion() 
   }
   function check4(){
     useranswer.push(choice1[i])
     clear()
     nextquestion() 
   }

   function clear(){
      
      $("#line1").empty();
      $("#line2").empty();
      $("#line3").empty();
      $("#line4").empty();
      $("#line5").empty();
      console.log(useranswer)
      i++;
    }
//--geoindex.html

