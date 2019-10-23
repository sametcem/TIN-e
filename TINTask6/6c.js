function validMail() {
  var text = document.getElementById("text1").value;

  var regex = /^([a-zA-z0-9\.-]{2,20})@([a-zA-z0-9-]+).([a-z]{2,20})$/;
    if(regex.test(text)){
      document.getElementById("labeltext").innerHTML = "Valid E-Mail Address";
      document.getElementById("labeltext").style.visibility = "visible";
      document.getElementById("labeltext").style.color = "green";

      return true;
    }
      else {
        document.getElementById("labeltext").innerHTML = "Invalid E-Mail Address";
        document.getElementById("labeltext").style.visibility = "visible";
        document.getElementById("labeltext").style.color = "red";

        return true;
      }
      return false;
}

function validAge(){
    var text = document.getElementById("age").value;
    var reg = /^[0-9]{1,2}$/;

    if(reg.test(text)){
      document.getElementById("labeltext2").innerHTML = "Valid AGE";
      document.getElementById("labeltext2").style.visibility = "visible";
      document.getElementById("labeltext2").style.color = "green";

      return true;
    }
    else {
      document.getElementById("labeltext2").innerHTML = "Invalid AGE";
      document.getElementById("labeltext2").style.visibility = "visible";
      document.getElementById("labeltext2").style.color = "red";

      return true;
    }
    return false;
}

function validPass(){
    var text = document.getElementById("myInput").value;
    var rq = /^[a-zA-z0-9\.-]{5,30}$/;

    if(rq.test(text)){
      document.getElementById("labeltext3").innerHTML = "Valid PASSWORD";
      document.getElementById("labeltext3").style.visibility = "visible";
      document.getElementById("labeltext3").style.color = "green";

      return true;
    }
    else {
      document.getElementById("labeltext3").innerHTML = "Invalid PASSWORD(Must be at least 5 Character)";
      document.getElementById("labeltext3").style.visibility = "visible";
      document.getElementById("labeltext3").style.color = "red";

      return true;
    }
    return false;
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
