$.validator.setDefaults( {
			submitHandler: function () {
				alert( "submitted!" );
			}
		} );
$(document).ready(function(){
    $("#signupForm").validate({
        rules: {
            name: "required",
            username: "required",
            password: "required",
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true,
            },
            agree: "required"
        },
        messages: {
            name: "Please enter your name",
            username: "Please create a username",
            password: "Please create a password",
            confirmPassword: {
                required: "Please confirm password",
                equalTo: "Passwords do not match"
            },
            email: {
                required: "Please provide your email address",
                email: "Not a valid email address"
            },
            agree: "Please agree to our terms and services"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
        }
    })
});