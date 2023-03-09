function oncl() {
  var nam = document.getElementById("nam");
  var email = document.getElementById("email");
  var numb = document.getElementById("phone");
  var msg = document.getElementById("message");

  if (nam.value == "") {
    alert("Enter complete details");
  } else {
    confirm(
      "your name is:" +
        nam.value +
        "\n" +
        "your email is:" +
        email.value +
        "\n" +
        "your number is " +
        numb.value +
        "\n"
    );
  }
}
