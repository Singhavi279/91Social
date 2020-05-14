function validation(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var contact = document.getElementById("contact").value;
  var address = document.getElementById("address").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if(name.length <5){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter Valid Email Id";
    error_message.innerHTML = text;
    return false;
  }

  if(password.length <8){
    text = "Password Length Should be 8 Characters Minimum";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(contact) || contact.length !=10){
    text = "Please Enter Valid Contact Number";
    error_message.innerHTML = text;
    return false;
  }

  if(address.length <20){
    text = "Address Length Should be 20 Characters Minimum";
    error_message.innerHTML = text;
    return false;
  }

  alert("form Submitted Successfully!")
  return true;
}
