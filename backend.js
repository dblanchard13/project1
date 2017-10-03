
(function() {
    var cx = '012033538369567141577:jswhd2vhhfe';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

//----Geoindex---
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

   