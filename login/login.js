$(document).ready(function (e) {
  $("#member_form").submit(function (event) {
    event.preventDefault();
    console.log("Hello");
    var isValid = true;

    var email = $("#email").val().trim();
    console.log("EMAIL", email);
    let arr = email.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    console.log("TRUE OR FALSE", arr);
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

    if (isValid == false) {
      event.preventDefault();
    }
  });
});
