$(document).ready(function () {
	
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var answerArray=new Array();
var score=0;
var currentAnswer=0;
var answerRef="";
 	 

		 
		 
		 

 
 		$.getJSON('activity.json', function(data) {

		for(i=0;i<data.quizlist.length;i++){ 
			questionBank[i]=new Array;
			questionBank[i][0]=data.quizlist[i].question;
			 var numberOfOptions=(data.quizlist[i].option.length);
			 for(ii=0;ii<numberOfOptions;ii++){
			questionBank[i][ii+1]=data.quizlist[i].option[ii];
			 }//ii
		}//i
		 numberOfQuestions=questionBank.length; 
		
		 
		displayQuestion();
		})//gtjson
 
 



function displayQuestion(){
 

 
 
var numberOfOptions=questionBank[questionNumber].length-1;
answerArray=[];
for(i=0;i<numberOfOptions;i++){
	answerArray[i]=questionBank[questionNumber][i+1];
	}
	 
answerRef=answerArray[0];

scramble(answerArray);


$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div>');

for(i=0;i<answerArray.length;i++){
	$(stage).append('<div id="'+[i+1]+'" class="option">'+answerArray[i]+'</div>');
}

 

 $('.option').click(function(){
  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==currentAnswer){
   $(stage).append('<div class="feedback1">CORRECT</div>');
   score++;
   }
  //wrong answer	
  if(this.id!=currentAnswer){
   $(stage).append('<div class="feedback2">WRONG</div>');
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}//display question

	
	
	
	
	
	function changeQuestion(){
		
		questionNumber++;
	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question
	

	
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		
	}//display final slide
	
	
	
	function scramble(scrambleArray){
		var temp="";var rnd2=0;var rnd3=0;
		
		for(i=0;i<30;i++){
		
		rnd2=Math.floor(Math.random()*scrambleArray.length);
		rnd3=Math.floor(Math.random()*scrambleArray.length);
		 
		temp=scrambleArray[rnd3];
		scrambleArray[rnd3]=scrambleArray[rnd2];
		scrambleArray[rnd2]=temp;
		}
		
		
		for(i=0;i<answerArray.length;i++){
			answerArray[i]=scrambleArray[i]; 
			if(answerArray[i]==answerRef){currentAnswer=i+1;}
		}
		 
		
	}//scramble
	
	
	
	});//doc ready