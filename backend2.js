// Game logic for programming quiz.

 window.onload = function() {
    
  $("#line3b").html('<button type="button" id="startbutton2" class="btn btn-success btn-block">Start</button>')
    $("#startbutton2").click(startCodeGame);
  };

  function startCodeGame(){
    $("#line3b").empty();  
    nextCodeQuestion();
  };

  
  var question2 = ["which keyword is used to indicate a variable?", "What is the '='(equal sign) called in JavaScript?", "In JavaScript which comparison operator tests wheater the left and right values are identical to one another?", "In JavaScript which method take a string and converts all the characters to lower case?", "In JavaScript which property do you find the length of an array?"]
   var choice1b=["variable", "is equivalent", "===", "ToLowerCase()", "length ()"]
   var choice2b=["var", "equal to", "!==", "To LowerCase()", ".length()"]
   var choice3b=["vrb", "assignment operator", ">=", "To LowerCase()", ".length"]
   var choice4b=["int", "answer", "=", "toLowerCase()", "length."]
   var j = 0;
   var playerAnswer = []

   function nextCodeQuestion(){

    console.log(j)

    $("#line2b").html(question2[j]);
    $("#line3b").html('<button type="button" id="choice1" class="btn btn-success">'+choice1b[j])+'</button>';
    $("#line4b").html('<button type="button" id="choice2" class="btn btn-success">'+choice2b[j])+'</button>';
    $("#line5b").html('<button type="button" id="choice3" class="btn btn-success">'+choice3b[j])+'</button>';
    $("#line6b").html('<button type="button" id="choice4" class="btn btn-success">'+choice4b[j])+'</button>';
    $("#choice1").click(check1b);
    $("#choice2").click(check2b);
    $("#choice3").click(check3b);
    $("#choice4").click(check4b);

    if (j == question2.length) {
     
      $("#line1").html("-GAME END!-");
      $("#line2").html("Correct: ");
      $("#line3").html("Incorrect: ");
      $("#line4").empty();
      $("#line5").empty();
    }

   }

   function check1b(){
     playerAnswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }
   function check2b(){
     playerAnswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }
   function check3b(){
     playerAnswer.push(choice1b[j])
     clearLines()
     nextCodeQuestion() 
   }
   function check4b(){
     playerAnswer.push(choice1b[j])
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
      j++;
    }