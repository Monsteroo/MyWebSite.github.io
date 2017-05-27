function valid(form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var message = form.message.value;
    var symbols_name = /[a-zA-Z]/;
    var symbols_email = /[@]/ ;
    if (name == " " || name == "")
        fail = "Enter the name!";
    else if(symbols_name.test(name)== false)
    	fail = "Incorrect name!";
    else if(symbols_email.test(email)== false)
    	fail = "Incorrect email!";
    else if (email == "")
        fail = "Enter the email!";
     else if (message == "")
        fail = "Enter the message!";
    if (fail)
        alert(fail);
    else
        alert("Message sent!");
}
