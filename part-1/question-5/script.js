function calculateMarks() {
    var subject1 = parseInt(document.getElementById("subject1").value);
    var subject2 = parseInt(document.getElementById("subject2").value);
    var subject3 = parseInt(document.getElementById("subject3").value);
    var subject4 = parseInt(document.getElementById("subject4").value);
    var subject5 = parseInt(document.getElementById("subject5").value);
  
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
      alert("Please enter valid numbers for all subjects.");
      return;
    }
  
    var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    var averageMarks = totalMarks / 5;
  
    document.getElementById("totalMarks").innerHTML = "Total Marks: " + totalMarks;
    document.getElementById("averageMarks").innerHTML = "Average Marks: " + averageMarks.toFixed(2);
  }
  