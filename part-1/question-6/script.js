function checkPrime() {
    var number = parseInt(document.getElementById("number").value);
    var result = document.getElementById("result");
  
    if (isNaN(number)) {
      result.innerHTML = "Please enter a valid number.";
      return;
    }
  
    if (number <= 1) {
      result.innerHTML = "Please enter a number greater than 1.";
      return;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        result.innerHTML = number + " is not a prime number.";
        return;
      }
    }
  
    result.innerHTML = number + " is a prime number.";
  }
  