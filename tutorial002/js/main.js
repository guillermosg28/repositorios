function check() {
    var planSwitch = document.getElementById("plan-switch");
    var monthElements = document.getElementsByClassName("month");
    var annualElements = document.getElementsByClassName("annual");
  
    for (var t = 0; t < monthElements.length; t++) {
      if (planSwitch.checked) {
        annualElements[t].style.display = "block";
        monthElements[t].style.display = "none";
      } else {
        annualElements[t].style.display = "none";
        monthElements[t].style.display = "block";
      }
    }
  }
  
  check();