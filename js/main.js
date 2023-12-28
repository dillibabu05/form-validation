$(document).ready(function () {
  // Function to remove existing error messages
  function removeErrors() {
    $(".error").remove();
  }

  // Function to display error message
  function showError(element, message) {
    element.after(
      '<span class="error" style="color:red;">' + message + "</span>"
    );
  }

  // Click event for the send button
  $("#contact_send").click(function (e) {
    removeErrors(); // Remove existing error messages
    var hasError = false;
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var dob = $("#dob").val();
    var phone = $("#phone").val();
    var alternativePhone = $("#alternativePhone").val();
    var selectCourse = $("#selectCourse").val();
    var skillRange = $("#skillRange").val();
    var gender = $("input[name='gender']:checked").length;
    var favoriteCourse = $("input[name='favCourses[]']:checked").length;
    var message = $("#message").val();
    var password = $("#password").val();

    // Check for first name
    if (firstName === "") {
      showError($("#firstName"), "Enter your first name");
      hasError = true;
    } else if (firstName.length < 3) {
      showError($("#firstName"), "Enter at least 3 characters");
      hasError = true;
    }

    // Check for last name
    if (lastName === "") {
      showError($("#lastName"), "Enter your last name");
      hasError = true;
    } else if (lastName.length < 3) {
      showError($("#lastName"), "Enter at least 3 characters");
      hasError = true;
    }

    // Check for email
    if (email === "") {
      showError($("#email"), "Enter your email");
      hasError = true;
    }

    // Check for Date of Birth
    if (dob === "") {
      showError($("#dob"), "Enter your date of birth");
      hasError = true;
    }

    // Check for phone
    if (phone === "") {
      showError($("#phone"), "Enter your phone-number");
      hasError = true;
    } else {
      // Phone number validation - allows only integers and must be between 10 and 12 digits
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        showError($("#phone"), "Enter a valid phone number");
        hasError = true;
      }
    }

    // Check for alternativePhone
    if (alternativePhone === "") {
      showError($("#alternativePhone"), "Enter your alternative Phone");
      hasError = true;
    } else {
      // Phone number validation - allows only integers and must be between 10 and 12 digits
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        showError($("#alternativePhone"), "Enter a valid phone number");
        hasError = true;
      }
    }

    // fav course
    if (selectCourse === "") {
      showError($("#selectCourse"), "Select your select course");
      hasError = true;
    }

    // Check for gender
    if (!gender) {
      showError($("#demo"), "Select your gender");
      hasError = true;
    }

    // Check for favorite course
    if (favoriteCourse === 0) {
      showError($("#demo1"), "Select any one ");
      hasError = true;
    }

    // fav course
    if (message === "") {
      showError($("#message"), "Enter your message");
      hasError = true;
    }

    // password
    if (password === "") {
      showError($("#password"), "Enter your message");
      hasError = true;
    }

    if (hasError) {
      e.preventDefault();
    }
  });

  // Keyup event for the first name input field......   code for cheching length
  //first-name
  $("#firstName").on("keyup", function () {
    removeErrors();
    var firstName = $(this).val();
    if (firstName.length > 0 && firstName.length < 3) {
      showError($(this), "Enter at least 3 characters");
    }
  });
  //last-name  else if (lastName.length < 3) {
  $("#lastName").on("keyup", function () {
    removeErrors();
    var lastName = $(this).val();
    if (lastName.length > 0 && lastName.length < 3) {
      showError($(this), "Enter at least 3 characters");
    }
  });
  // email validation
  $("#email").on("keyup", function () {
    removeErrors();
    var email = $(this).val();
    // Basic email format validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length > 0 && !emailRegex.test(email)) {
      showError($(this), "Enter a valid email address");
    }
  });

  // phone
  $("#phone").on("blur", function () {
    removeErrors();
    var phone = $(this).val();
    if (phone === "") {
      showError($(this), "Enter your phone number");
    } else {
      // Phone number validation - allows only integers and must be between 10 and 12 digits
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        showError($(this), "Enter a valid phone number(10 digits) ");
      }
    }
  });

  // alternativePhone
  $("#alternativePhone").on("blur", function () {
    removeErrors();
    var alternativePhone = $(this).val();
    if (alternativePhone === "") {
      showError($(this), "Enter your alternative Phone number");
    } else {
      // Phone number validation - allows only integers and must be between 10 and 12 digits
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(alternativePhone)) {
        showError($(this), "Enter a valid phone number(10 digits) ");
      }
    }
  });

  // Change event for the gender radio buttons...error remove panum
  $("input[name='gender']").on("change", function () {
    removeErrors();
  });

  // Click event for the favorite course checkboxes
  $("input[name='favCourses[]']").click(function () {
    removeErrors();
    var favoriteCourse = $("input[name='favCourses[]']:checked").length;
    if (favoriteCourse === 0) {
      showError($("#demo1"), "Select any one");
    }
  });

  $("#password").on("change", function () {
    removeErrors();
    var password = $(this).val();

    // Define the regular expression for a strong password
    var strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password === "") {
      showError($("#password"), "Enter your password");
    } else if (!strongPasswordRegex.test(password)) {
      showError(
        $("#password"),
        "Use a stronger password with at least 8 characters, including uppercase, lowercase, numbers, and special characters"
      );
    }
  });

  //  ################################ remove error
  // Remove error messages when user starts typing
  $(".form-control").on("input", function () {
    $(this).next(".error").hide();
  });

  // ************************** click event
  // Click event for the last name input field
  //first name
  $("#lastName").click(function () {
    var firstName = $("#firstName").val();
    if (firstName === "") {
      removeErrors();
      showError($("#firstName"), "Please enter your first name");
    }
  });

  //last-name
  $("#email").click(function () {
    var lastName = $("#lastName").val();
    if (lastName === "") {
      removeErrors();
      showError($("#lastName"), "Please enter your last name");
    }
  });

  //email
  $("#dob").click(function () {
    var email = $("#email").val();
    if (email === "") {
      removeErrors();
      showError($("#email"), "Please enter your email");
    }
  });

  //dob
  $("#phone").click(function () {
    var dob = $("#dob").val();
    if (dob === "") {
      removeErrors();
      showError($("#dob"), "Please enter your date of birth");
    }
  });

  //phone
  $("#alternativePhone").click(function () {
    var phone = $("#phone").val();
    if (phone === "") {
      removeErrors();
      showError($("#phone"), "Please enter your phone number");
    }
  });

  //alternativePhone
  $("#selectCourse").click(function () {
    var alternativePhone = $("#alternativePhone").val();
    if (alternativePhone === "") {
      removeErrors();
      showError(
        $("#alternativePhone"),
        "Please enter your alternative Phone number"
      );
    }
  });

  //selectCourse
  $("#skillRange").click(function () {
    var selectCourse = $("#selectCourse").val();
    if (selectCourse === "") {
      removeErrors();
      showError($("#selectCourse"), "Please enter your course");
    }
  });

  //select gender
  $("#gender").click(function () {
    var skillRange = $("#skillRange").val();
    if (skillRange <= 1) {
      removeErrors();
      showError($("#skillRange"), "Please drag your skill range");
    }
  });

  //selectCourse
  $("#favCourses").click(function () {
    var gender = $("#gender").val();
    if (gender === "") {
      removeErrors();
      showError($("#gender"), "Please enter this field");
    }
  });

  //message
  $("#password").click(function () {
    var message = $("#message").val();
    if (message === "") {
      removeErrors();
      showError(
        $("#message"),
        "Please enter this message field"
      );
    }
  });
});


