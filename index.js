const form = document.getElementById("form");
const input = document.getElementsByTagName("input");
const arrowIcon = document.querySelector(".arrow-icon");
const errorMessage = document.getElementsByClassName("error-message");
const year = document.getElementById("year");
const day = document.getElementById("day");
const month = document.getElementById("month");
const currentYear = new Date();
  const label = document.querySelectorAll('label')

//get value





function getValue(e) {
  const yearInput = year.value.trim();
  const monthInput = month.value.trim();
  const dayInput = day.value.trim();
  const dayDate = dayInput - currentYear.getDate();
  const monthDate = monthInput - currentYear.getMonth() - 1;
  const age = currentYear.getFullYear() - yearInput;

  console.log(input)
  if (!yearInput || !monthInput || !dayInput) {

    //  const errorMessage = document.createElement('p')
   
    validateInput()
   
    console.log(errorMessage);
  } else if(dayInput > 31) {
  
    validateInput()

   

    console.log("day", dayDate);
    console.log("month", monthDate);
    console.log("year", age);
  }else if (monthInput > 12) {
    

    validateInput()


 
  }else if(yearInput > currentYear){
    validateInput()

   
  }else{
   displayAge();
    
  }

  function displayAge() {
    const lineOne = document.getElementsByClassName("line");
    const displayYear = document.getElementById("display-year");
    const displayMonth = document.getElementById("display-month");
    const displayDay = document.getElementById("display-day");

    for (var i = 0; i < lineOne.length; i++) {
      if (yearInput || monthInput || dayInput) {
        lineOne[i].style.display = "none";
        displayYear.textContent = age;
        displayMonth.textContent = monthDate;
        displayDay.textContent = dayDate;
      } else {
        displayAge()
        
      }
    }

  }
}
arrowIcon.addEventListener("click", getValue,);

function validateInput(){
  for (var i = 0; i < label.length; i++) {
        if(getValue){
          label[i].style.color = "red";

        }else if(getValue) {
              label[i].style.color = "none";

        }
  }

  // for (var i = 0; i < errorMessage.length; i++) {
  //   if(getValue){
  //     errorMessage[i].style.display = "block";

  //   }else{
  //         errorMessage[i].style.display = "none";

  //   }
  // }

  // for (var i = 0; i < input.length; i++) {
  //   if(getValue){
  //     input[i].style.border = "red solid 1px";

  //   }else{
  //         input[i].style.border = "black solid 1px";

  //   }
  // }
}