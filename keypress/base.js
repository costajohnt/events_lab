
console.log("Sanity Check: JS is working!");

var startTime; // undefined
var endTime; // undefined
var total; // undefined

$(document).ready(function(){

//I had trouble figuring out the solution to this problem so I'm going to try and pseudo comment what I do and do not understand about the problem.
//we use $(window).on to signify that we want the client to be ready to handle inputs.  I know we use keypress to signify that we are waiting
//for a key to be pressed so we can start running our function.  When I looked up keypress, I found that different keys are associated with 
//different numerical values in jquery, and that spacebar = 32.  How do we tell jquery that we are looking for spacebar specifically, because
//32 is not in the function below.  I also noticed that I could start and stop the timer with many different keys on the keyboard.  Is that becaue
//the keypress value, spacebar(32) has not been used?

  $(window).on("keypress", function handleKeypress(event){

//We use a conditional statement for startTime because we are waiting for the user to press a button before we start the timer.  If there was no 
//'if' statement, the timer would start when the window opened and would not be contigent on a keypress.

    if ( startTime ) {
//we equate end time to whatever the time is at the time we press spacebar again.  	
      endTime = Date.now();
 //if we subtract the start time from the end time we get the duration between spacebar hits, or total time, in milliseconds.  We divide that 
 //by 1000 to get the total time in full seconds (I think is that logic correct?)
      total = (endTime - startTime) / 1000;
 //This last line says hey, take the total amount of time and put it in the html document under the total time id and add the word 'seconds' to it.
      $("#total-time").text( total + " seconds" );
    } else {
 //I'm not sure why we need the else statement below.  Hmm.
      startTime = Date.now();
    }

  });

});