const resultEl = document.getElementById("result");
const inputEl = document.getElementById("text-input");
const buttonEl = document.getElementById("check-btn");

let isPalindrome = false;

function cleanInput(input) {
  const regex = /[^a-zA-Z0-9]/g
  const cleanstr = input.replace(regex, '')
  return cleanstr
}

function reverseInput(input) {
  const reversedValue = input.split("").reverse().join("");
  return reversedValue
}

function palindromeCheck(original, reversed) {
  if (original === reversed) {
    isPalindrome = true
  } else {
    isPalindrome = false
  }
}

function printResults(inputValue) {
  resultEl.innerHTML = ``;
  if (isPalindrome === true) {
  resultEl.innerHTML = `<p><span class="bold">${inputValue}</span> is a palindrome`
  } else {
    resultEl.innerHTML = `<p><span class="bold">${inputValue}</span> is not a palindrome</p>`
  }
}


const fullSend = () => {
  const inputValue = inputEl.value.trim().toLowerCase();
  const str = cleanInput(inputValue);
  const reverse = reverseInput(str);
  palindromeCheck(str, reverse)
  if (inputValue === "") {
    alert("Please input a value");
  } else {
    printResults(inputValue)
  }
}

buttonEl.addEventListener("click", fullSend)