const form = document.getElementById("form");
const input = document.getElementsByTagName("input");
const arrowIcon = document.querySelector(".arrow-icon");
const errorMessage = document.getElementsByClassName("error-message");
const year = document.getElementById("year");
const day = document.getElementById("day");
const month = document.getElementById("month");
const getYear = new Date();
const currentYear = getYear.getFullYear() ;
const label = document.querySelectorAll("label");

//get value

function getValue(e) {
  const yearInput = year.value.trim();
  const monthInput = month.value.trim();
  const dayInput = day.value.trim();
  const dayDate = dayInput - getYear.getDate();
  const monthDate = monthInput - getYear.getMonth() - 1;
  const age = currentYear - yearInput;


  if (!yearInput || !monthInput || !dayInput) {
    validateInput();
  } else if (dayInput > 31) {
    validateInput();
    console.log(validateInput);

  }else if (!isValidDay(monthInput, dayInput)) {
    validateInput()
  }else if (monthInput > 12) {
    validateInput();
  } else if (yearInput > currentYear) {
    validateInput();
  } else {
    displayAge();
  }

  function displayAge() {
    const lineOne = document.getElementsByClassName("line");
    const displayYear = document.getElementById("display-year");
    const displayMonth = document.getElementById("display-month");
    const displayDay = document.getElementById("display-day");

    if (!yearInput || !monthInput || !dayInput) {
      validateInput();
    } else {
      for (var i = 0; i < lineOne.length; i++) {
        lineOne[i].style.display = "none";
      }
      displayYear.textContent = age;
      displayMonth.textContent = monthDate;
      displayDay.textContent = dayDate;
      validateInput();
      clearForm();
    }
  }

  function isValidDay(monthInput, dayInput) {
    const daysInMonth = new Date(2022, monthInput, 0).getDate();
    return dayInput <= daysInMonth;
  }


  function validateInput() {
    const hasEmptyInputs = !year.value.trim() || !month.value.trim() || !day.value.trim();
    const valiidMonth = monthInput <= 12;
    const validDay = dayInput <= 31;
    const validYear = yearInput <= currentYear;
    const invalidInput = !valiidMonth || !validDay || !validYear;

    for (var i = 0; i < label.length; i++) {
      if (hasEmptyInputs || invalidInput) {
        label[i].style.color = "red";
      } else {
        label[i].style.color = "";
      }
    }

    for (var i = 0; i < errorMessage.length; i++) {
      if (hasEmptyInputs || invalidInput) {
        errorMessage[i].style.display = "flex";
      } else {
        errorMessage[i].style.display = "none";
      }
    }

    for (var i = 0; i < input.length; i++) {
      if (hasEmptyInputs || invalidInput) {
        input[i].style.border = "red solid 1px";
      } else {
        input[i].style.border = "";
      }
    }

    
    
  }

  

  function clearForm() {
    year.value = "";
    month.value = "";
    day.value = "";
  }
}
arrowIcon.addEventListener("click", getValue);
