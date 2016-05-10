function validate(formular)
{
var letters = /^[A-Za-z ]+$/;
var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var alertMsg = document.getElementsByClassName("mandatory-field");
var alertMsg2 = document.getElementsByClassName("second");
if(formular.fullname.value==""){
    alertMsg[0].innerHTML = "*Camp obligatoriu";
	return false;
	}
else if (!formular.fullname.value.match(letters)){
	alertMsg[0].innerHTML = ("*Sunt acceptate doar litere!");
	return false;
	}
else if(formular.mail.value==""){
	alertMsg2[0].innerHTML = ("*Camp obligatoriu");
	return false;
	}
else if(!formular.mail.value.match(regEx)){
	alertMsg2[0].innerHTML = ("*Adresa de e-mail invalida");
	return false;
    }
else
	return true;
}