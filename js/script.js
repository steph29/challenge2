$("#send").bind("click", function () {
  var mail = $("#email").val();
  var result = ValidateEmail(mail);
  if (result == true) {
    $("#resultat").text(mail + " is correct");
    $("#resultat").css("color", "green");
  } else {
    $("#resultat").text("Please provide a valid email");
    $("#resultat").css("color", "red");
    $("#email").css("border", "2px solid red");
    $("#send").css(
      "border",
      "3px solid linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))"
    );
  }
});

function ValidateEmail(mail) {
  var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
  console.log(regex.test(mail));
  return regex.test(mail);
}
