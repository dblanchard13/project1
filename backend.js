//index.html
      function initMap() {
        var uluru = {lat: 37.7912976, lng: -122.3937426};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

   

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
  s.parentNode.insertBefore(gcse, s); })();


 window.onload = function() {
    
	$("#line1").html('<button type="button" id="startbutton1" class="btn btn-success btn-block">Start</button>')
    $("#startbutton1").click(startgame1);


  $("#line6").html('<button type="button" id="startbutton2" class="btn btn-success btn-block">Start</button>')
    $("#startbutton2").click(startgame2);
  };


     function startgame1(){
      $("#line1").empty();	
      nextquestion1();
      };
     function startgame2(){
       $("#line6").empty();  
      nextquestion2();}
  
  var question1=["You are in a Country that's dark all day for 60 days straight. what country are you in?"
  ,"If you were to drive 680 miles south and 400 miles west from this latitude 60.192059, and longitude 24.945831. what country would you be in?"
  ,"If you guessed correctly the pervious queston then this question so be easy hahahahaha. What is the number one landmark in this country?"
  ,"This landmark has a envelope with directions that will land you in a country that has the Petronas twin towers. what country is this?"
  ,"Who was the president of Uganda in 1972?"]
   var choice1=["Denmark","Denmark","Gendarmenmarkt","Dubai","Richard Nixon"]
   var choice2=[" Iceland","Poland","Jewish Ghetto Memorial","China","Yoweri Museveni"]
   var choice3=["Russia","Germany","Cumil","Malaysia","Idi Amin"]
   var choice4=["Finland","Slovakia","Roskilde Cathedra","Phillipines","Milton Obote"]
   var answer1=["Finland","Germany","Gendarmenmarkt","Malaysia","Idi Amin"]
   var i=0;
   var useranswer1=[]
   var correct1=0;

   function nextquestion1(){ 
   
    $("#line1").addClass("text-center")
    $("#line1").html(question1[i]);
    $("#line2").html('<button type="button" id="choice1" class="btn btn-success btn-lg btn-block">'+choice1[i])+'</button>';
    $("#line3").html('<button type="button" id="choice2" class="btn btn-success btn-lg btn-block">'+choice2[i])+'</button>';
    $("#line4").html('<button type="button" id="choice3" class="btn btn-success btn-lg btn-block">'+choice3[i])+'</button>';
    $("#line5").html('<button type="button" id="choice4" class="btn btn-success btn-lg btn-block">'+choice4[i])+'</button>';
    $("#choice1").click(check1);
    $("#choice2").click(check2);
    $("#choice3").click(check3);
    $("#choice4").click(check4);
     if(i==question1.length){     //end page
     
      $("#line1").html("-GAME END!-");
      $("#lineend1").addClass("end")
      $("#lineend1").html("SCORE: "+correct1+"/"+question1.length);
      $("#line2").empty()
      $("#line3").empty()
      $("#line4").empty();
      $("#line5").empty();
    }};

   function check1(){
     useranswer1.push(choice1[i])
    
     checkanswer1()
     clear1()
     nextquestion1() 
   }
   function check2(){
     useranswer1.push(choice2[i])
     checkanswer1()
     clear1()
     nextquestion1() 
   }
   function check3(){
     useranswer1.push(choice3[i])
     checkanswer1()
     clear1()
     nextquestion1() 
   }
   function check4(){
     useranswer1.push(choice4[i])
     checkanswer1()
     clear1()
     nextquestion1() 
   }

   function clear1(){
      
      $("#line1").empty();
      $("#line2").empty();
      $("#line3").empty();
      $("#line4").empty();
      $("#line5").empty();
      i++;
    }

    function checkanswer1(){
    if(answer1[i]===useranswer1[i]){
      correct1++;
      
      }}
//--geoindex.html
//--codingindex.html



  var question2=["Which keyword is used to indicate a variable?"
    , "What is the '='(equal sign) called in JavaScript?"
    , "In JavaScript which comparison operator tests wheater the left and right values are identical to one another?"
    , "In JavaScript which method take a string and converts all the characters to lower case?"
    , "In JavaScript which property do you find the length of an array?"]
   var choice5=["variable","is equivalent","===","ToLowerCase()","length ()"]
   var choice6=["var","equal to","!==","To LowerCase()",".length()"]
   var choice7=["vrb","assignment operator",">=","To LowerCase()",".length"]
   var choice8=["int","answer","=","toLowerCase()","length."]
   var answer2=["var","equal to","===","toLowerCase()",".length"]
   var j=0;
   var useranswer2=[]
   var correct2=0;

   function nextquestion2(){ 
    
    $("#line6").addClass("text-center")
    $("#line6").html(question2[j]);
    $("#line7").html('<button type="button" id="choice5" class="btn btn-success btn-lg btn-block">'+choice5[j])+'</button>';
    $("#line8").html('<button type="button" id="choice6" class="btn btn-success btn-lg btn-block">'+choice6[j])+'</button>';
    $("#line9").html('<button type="button" id="choice7" class="btn btn-success btn-lg btn-block">'+choice7[j])+'</button>';
    $("#line10").html('<button type="button" id="choice8" class="btn btn-success btn-lg btn-block">'+choice8[j])+'</button>';
    $("#choice5").click(check5);
    $("#choice6").click(check6);
    $("#choice7").click(check7);
    $("#choice8").click(check8);
     if(j==question2.length){     //end page
      $("#line6").html("-GAME END!-");
      $("#lineend2").addClass("end");
      $("#lineend2").html("SCORE: "+correct2+"/"+question2.length);
      $("#line7").empty()
      $("#line8").empty()
      $("#line9").empty();
      $("#line10").empty();
    }};


   function check5(){
     useranswer2.push(choice5[j])
     checkanswer2()
     clear2()
     nextquestion2() 
   }
   function check6(){
     useranswer2.push(choice6[j])
     checkanswer2()
     clear2()
     nextquestion2() 
   }
   function check7(){
     useranswer2.push(choice7[j])
     checkanswer2()
     clear2()
     nextquestion2() 
   }
   function check8(){
     useranswer2.push(choice8[j])
     checkanswer2()
     clear2()
     nextquestion2() 
   }

   function clear2(){
      
      $("#line6").empty();
      $("#line7").empty();
      $("#line8").empty();
      $("#line9").empty();
      $("#line10").empty();
      j++;
    }

    function checkanswer2(){
    if(answer2[j]===useranswer2[j]){
      correct2++;
      }}



//--codiingindex.html

   