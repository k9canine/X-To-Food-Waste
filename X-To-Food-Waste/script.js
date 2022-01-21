//Create an Object with all the potential results 
var quiz_outcome = [
  { name: "Great",
    description: " doing well in not wasting food",
  },
  { name: "OK",
    description: "doing a ok job at not wasting food!",
  },
  { name: "Not Too Bad",
    description: "not on the good side, but not horrible!",
  },
  { name: "Needs a lot of Work",
    description: "in need of wasting less food and becoming more aware", 
  },
]

//Access the empty results container
var resultText = $(".results-container");
//Access the buttom
var submitQuiz = $(".submit-quiz");


//Event listener 
submitQuiz.on("click", getResult);



//Function run when the button is clicked
function getResult() {  
  var total = 0;  
  
 
  for (var i = 1; i <= 4; i++) {
    //Conditional that checks the class of each option for each question and then adds a value to the total depending on the option that was selected
    if ($(`.Q${i}OP1:checked`).val()) {
      total += 0;
    } else if ($(`.Q${i}OP2:checked`).val()) {
      total += 1;
    } else if ($(`.Q${i}OP3:checked`).val()) {
      total += 2;
    } else if ($(`.Q${i}OP4:checked`).val()) {
      total += 3;
    } 
  }
  
  // divide by number of questions
  var result = (total / 3)
  //rounds total to a whole number
  var round = Math.round(result)

  //checks the numbers calculated
  console.log(total)
  console.log(result)
  console.log(round)

  //use the number as an index to select the results from the results Object (the very first thing we coded at the top)
  if (round >= 2){
    window.location.replace("high-waste.html");
  }
  else{
    window.location.replace("low-waste.html");
  }
  resultText.append(`Thank you for taking our quiz! Looks like you're ${quiz_outcome[round].name}! This means you are ${quiz_outcome[round].description}`);
  
}      




// for the index page
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// for quiz

// var buttonQuiz = $(".back");

function goBack(){
  window.location.replace("quiz.html");
  
  
}


// buttonQuiz.on('click', goBack);



