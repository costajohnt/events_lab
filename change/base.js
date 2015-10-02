
console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );


//We want to take the left input and right input and set up jquery so that it is ready to accept changes, i.e. its waiting for the user to 
//some value so by writing input.add we select both boxes, and now we want to run them through a function. 
  $("input.add").on("change", function handleChange(event){
 //Here we write a function to handle any scenario where inputs are put into either the left or right box.
 //We created variables for both the left and right boxes and equate them to the value of the corresponding html element.
    var left = $("input#left").val();
    var right = $("input#right").val();
 //Next, we create variables that take the left and right variables we just created, and use parseInt to make them integers (instead of a string)
 //because if we don't do this step, the sum of (for example) 2 and 3 would be 23 and not 5 because it would be seen as a string and not an integer.
 //we set it equal to the integer, or 0 because if the user puts in something that's not a number, like 'hey there' or leaves the box empty,
 //we can still get a value.
    var leftVal = parseInt(left) || 0;
    var rightVal = parseInt(right) || 0;
  //We create a variable, total, to get the sum of the left and right side values.
    var total = leftVal + rightVal;
  //finally, we assign the variable, total (which contains the sum of left and right) to the corresponding html box, input#total.  BOOM!
    $("#total").val(total);
  })

})