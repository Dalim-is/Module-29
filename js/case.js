/*
internal step
step-1: add event listener to the case plus button
step-2: get the value inside the case input field
step-3: conver the number to an integer
step-4: set the value to the case number field


*/

function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCasenumber = parseInt(caseNumberString);

 let newCaseNumbe;
  if (isIncrease === true) {
    newCaseNumber = previousCasenumber + 1;
  }
  else{
    newCaseNumber = previousCasenumber - 1;
  }

  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
  
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
const newCaseNumber = updateCaseNumber(false);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();
  });
