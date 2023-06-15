document.getElementById("button").onclick = function submitBtn(){
  userName = document.getElementById("input-name");
  userEmail = document.getElementById("input-email");
  userAge = document.getElementById("input-age");

  if(userName.value === ""){
    alert(`Name field is required!`);
  }if(userEmail.value === ""){
    alert(`Email field is required!`);
  }if(userAge.value === ""){
    alert(`Age field is required!`);
  }
 

}




function myFunction() {
    let myPassWord = document.getElementById("input-password");
    if (myPassWord.type === "password") {
      myPassWord.type = "text";
    } else {
      myPassWord.type = "password";
    }
  }

   










