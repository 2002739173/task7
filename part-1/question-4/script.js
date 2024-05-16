function insertNumbers() {
    var inputNumber = parseInt(document.getElementById("number").value);
    var result = document.getElementById("result");
    result.innerHTML = "";
  
    if (isNaN(inputNumber)) {
      result.innerHTML = "Please enter a valid number.";
      return;
    }
  
    if (inputNumber % 2 !== 0) {
      result.innerHTML = "Please enter an even number.";
      return;
    }
  
    for (var i = 2; i <= inputNumber; i += 2) {
      result.innerHTML += i + " ";
    }
  }
  