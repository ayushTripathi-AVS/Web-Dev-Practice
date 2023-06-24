function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function() {
    $("#submitButton").click(function() {
        var errorMessage = "";
        var missingField = "";

        if ($("#Email").val() == "") {
            missingField += "<p>Email field not filled</p>";
        }
        if ($("#phoneNo").val() == "") {
            missingField += "<p>Phone Number field not filled</p>";
        }
        if ($("#password").val() == "") {
            missingField += "<p>Password field not filled</p>";
        }
        if ($("#confirmPassword").val() == "") {
            missingField += "<p>Confirm Password field not filled</p>";
        }
        if (isEmail($("#Email").val()) == false) {
            errorMessage += "<p>Email id is not valid</p>";
        }
        if ($("#phoneNo").val() == "" || (!$.isNumeric($("#phoneNo").val()) || $("#phoneNo").val().length !== 10)) {
            errorMessage += "<p>Phone number is not valid</p>";
        }
        if ($("#password").val() != $("#confirmPassword").val()) {
            errorMessage += "<p>Password does not match</p>";
        }
        if (errorMessage == "" && missingField == "") {
            $("#errors").html("");
            $("#success").html("You are registered");
        } else {
            $("#success").html("");
            $("#errors").html(errorMessage + missingField);
        }
    });
});