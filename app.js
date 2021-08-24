const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkLucky = document.querySelector("#check-lucky");
const output = document.querySelector("#output-container");





function checkLuckyHandler() {
    if (dateOfBirth.value&&luckyNumber.value) {
        var dob = dateOfBirth.value;
        var sum = sumTheDob(dob);
        calculateLucky(sum, luckyNumber.value);
    }
    else {
        output.innerText= "please enter both values"
    }
}

function sumTheDob(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i=0; i<dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    return sum;
}

function calculateLucky(sum, numEntered) {
    if (sum%numEntered === 0) {
        console.log("clicked");
        output.innerText="Hurray your birthday is lucky 😁";
    } else {
        output.innerText="Oops sorry your birthday is not lucky ";
    }
}

checkLucky.addEventListener("click",checkLuckyHandler);