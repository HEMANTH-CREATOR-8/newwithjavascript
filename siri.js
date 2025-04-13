function myfun(){
  let username = document.getElementById("entername").value;
  let password = document.getElementById("password").value;
  if (username === "hemanth" && password === "nani") {
   window.location.href="SUBMIT.HTML";
  } 
  else {
    window.alert("enter valid username and password");
  }
}