$(document).ready(function (e) {
  $("#member_form").submit(function (event) {
    event.preventDefault();
    var isValid = true;

    var email = $("#email").val().trim();
    console.log("EMAIL", email);

    if (email == "") {
      $("#email").next().text("This field is required.");
      isValid = false;
    } else if (
      !email.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ) {
      $("#email").next().text("invalid email");
    } else {
      $("#email").next().text("");
    }
    $("#email").val(email);

    var password = $("#password").val().trim();
    if (password == "") {
      $("#password").next().text("This field is required.");
      isValid = false;
    }

    var firstname = $("#firstname").val().trim();
    var lastname = $("#lastname").val().trim();
    var confirmPassword = $("#confirm-password").val().trim();

    if (firstname == "") {
      $("#firstname").next().text("First name is required");
      isValid = false;
    }

    if (lastname == "") {
      $("#lastname").next().text("Last name is required");
      isValid = false;
    }
    console.log("PAssword", password);
    console.log("confirm password", confirmPassword);

    if (password != confirmPassword) {
      $("#confirm-password").next().text("passwords do not match");
      isValid = false;
    }

    if (isValid == false) {
      event.preventDefault();
    }
    if (isValid == true) {
      window.location.href = "../login/login.html";
    }
  });
});
