const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick=function (){
    if (myCheckBox.checked){
        subResult.textContent=`You are subscribed!`
    }
    else{
        subResult.textContent=`You are not subscribed`
    }
    
    if (visaBtn.checked){
        paymentResult.textContent=`NOTE: You are paying with Visa`
    }
    else if (mastercardBtn.checked){
        paymentResult.textContent=`NOTE: You are paying with MasterCard`
    }
    else if (payPalBtn.checked){
        paymentResult.textContent=`NOTE: You are paying with PayPal`
    }
    else{
        paymentResult.textContent=`You must select a payment method`
    }
}