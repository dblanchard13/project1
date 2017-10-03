

 window.onload = function() {
    
	$("#line3").html('<button type="button" id="startbutton" class="btn btn-success btn-block">Start</button>')
    $("#startbutton").click(startgame);
  };

  function startgame(){
    $("#line3").empty();	
    nextquestion();
  };

  
  var question=["You are in a Country that's dark all day for 60 days straight. what country are you in?"
  ,"if you were to drive 680 miles south and 400 miles west from this latitude 60.192059, and longitude 24.945831. what country would you be in?"
  ," if you guessed correctly the pervious queston then this question so be easy hahahahaha. What is the number one landmark in this country?"
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

    $("#line2").html(question[i]);
    $("#line3").html('<button type="button" id="choice1" class="btn btn-success">'+choice1[i])+'</button>';
    $("#line4").html('<button type="button" id="choice2" class="btn btn-success">'+choice2[i])+'</button>';
    $("#line5").html('<button type="button" id="choice3" class="btn btn-success">'+choice3[i])+'</button>';
    $("#line6").html('<button type="button" id="choice4" class="btn btn-success">'+choice4[i])+'</button>';
    $("#choice1").click(check1);
    $("#choice2").click(check2);
    $("#choice3").click(check3);
    $("#choice4").click(check4);
   }

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
      
      $("#line2").empty();
      $("#line3").empty();
      $("#line4").empty();
      $("#line5").empty();
      $("#line6").empty();
      console.log(useranswer)
      i++;}

// Game logic for programming quiz.

 window.onload = function() {
    
  $("#cdLine3").html('<button type="button" id="startbutton2" class="btn btn-success btn-block">Start</button>')
    $("#startbutton2").click(startCodeGame);
  };

  function startCodeGame(){
    $("#cdLine3").empty();  
    nextCodeQuestion();
  };

  
  var question2 = ["which keyword is used to indicate a variable?", "What is the '='(equal sign) called in JavaScript?", "In JavaScript which comparison operator tests wheater the left and right values are identical to one another?", "In JavaScript which method take a string and converts all the characters to lower case?", "In JavaScript which property do you find the length of an array?"]
   var choice1b=["variable","var","vrb","int"]
   var choice2b=["is equivalent","equal to","assignment operator","answer"]
   var choice3b=["===","!==",">=","="]
   var choice4b=["ToLowerCase()","To LowerCase()","lowerTheCase","toLowerCase()"]
   var answer2=["length ()",".length()",".length","length."]
   var j = 0;
   var playerAnswer = []

   function nextCodeQuestion(){ 

    $("#line2b").html(question2[j]);
    $("#line3b").html('<button type="button" id="choice1" class="btn btn-success">'+choice1b[j])+'</button>';
    $("#line4b").html('<button type="button" id="choice2" class="btn btn-success">'+choice2b[j])+'</button>';
    $("#line5b").html('<button type="button" id="choice3" class="btn btn-success">'+choice3b[j])+'</button>';
    $("#line6b").html('<button type="button" id="choice4" class="btn btn-success">'+choice4b[j])+'</button>';
    $("#choice1b").click(check1b);
    $("#choice2b").click(check2b);
    $("#choice3b").click(check3b);
    $("#choice4b").click(check4b);
   }

   function check1b(){
     useranswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }
   function check2b(){
     useranswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }
   function check3b(){
     useranswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }
   function check4b(){
     useranswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }

   function clearLines(){
      
      $("#line2b").empty();
      $("#line3b").empty();
      $("#line4b").empty();
      $("#line5b").empty();
      $("#line6b").empty();
      console.log(playerAnswer)
      j++;}

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBINrSsfJcrqUsg7zC1NhHqLQtW_OXp1r8",
    authDomain: "quiz-assignment.firebaseapp.com",
    databaseURL: "https://quiz-assignment.firebaseio.com",
    projectId: "quiz-assignment",
    storageBucket: "quiz-assignment.appspot.com",
    messagingSenderId: "109099748294"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var playerName = "";
var email = "";

$("#add-user").on("click", function(event) {

  // Preventing the webpage from restarting.

  event.preventDefault();

  // The defaults for the following variables will be replaced with info on trains from the HTML form.

  playerName = $("#add-name").val().trim();
  email = $("#add-email").val().trim();

  var trElement = $("<tr>")
  var tdName = $("<td>" + playerName + "</td>")
  var tdEmail = $("<td>" + email + "</td>")

  trElement.append(tdName)
  trElement.append(tdEmail)

  $("#table-body").append(trElement)

  // Adding info on trains to the database.

  database.ref().push({

    playerName: playerName,
    email: email

  })

  $("#add-name").val("");
  $("#add-email").val("");

})

// There needs to be code to add and retrieve a player's score and rating from the database. These values also need to be added to the table.

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  var sv = snapshot.val();

  console.log(sv.playerName);
  console.log(sv.email);

}, function(errorObject) {

      console.log("Errors handled: " + errorObject.code);
      
});