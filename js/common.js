function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}
function setTextElementValueById(elementId,value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  // Calculate Total
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const cureentCasetotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + cureentCasetotal;
  setTextElementValueById('sub-total', currentSubTotal);

  //   calculate Tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById('tax-amount', taxAmount);

  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById('final-total', finalAmount);

}