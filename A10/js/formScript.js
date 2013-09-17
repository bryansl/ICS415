function getClasses(elem)
{
	var classes = document.getElementByTagName(elem).className.split();
	
	return classes;
}

function addClass(elem, className)
{
	var cList = new Array();
	
	cList = getClasses(elem);
	
	var exist = false;
	for(int i = 0; i < cList.length; i++)
	{
		if(className === cList[i])
		{
			exist = true;
		}
	}

	if(!exist)
	{
		document.getElementByTagName(elem).className += " " + className;
	}
}

function validateForm()
{
	var name = document.forms["myForm"]["name"];
	var email = document.forms["myForm"]["email"];
	var pass = document.forms["myForm"]["password"];
	var cpass = document.forms["myForm"]["confirm"];
	var atpos = email.value.indexOf("@");
	var dotpos = email.value.lastIndexOf(".");
	
	var good = false;
	
	var deleteDiv = document.getElementById("msgDiv");
	if(deleteDiv!=null)
	{
		document.forms["myForm"].removeChild(deleteDiv);
	}
	
	if(name.value==null || name.value=="")
	{
		name.className="invalid";
		errorMessage("must provide username");
	}
	else
	{
		name.className="";
		good=true;
	}

	if(atpos < 1 || dotpos<atpos+2 || dotpos+2>=email.value.length)
	{
		email.className="invalid";
		errorMessage("must provide valid email address");
	}
	else
	{
		email.className="";
		good=true;
	}
	
	if(pass.value==null || pass.value=="" || cpass.value==null || cpass.value=="")
	{
		pass.className="invalid";
		cpass.className="invalid";
		errorMessage("must input password");
		return false;
	}
	else
	{
		pass.className="";
		cpass.className="";
		good=true;
	
		if(pass.value!=cpass.value)
		{
			pass.className="invalid";
			cpass.className="invalid";
			errorMessage("passwords need to match");
			return false;
		}
		else
		{
			pass.className="";
			cpass.className="";
			good = true;
		}
	}
	if(!good)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function errorMessage(msg)
{
	var form = document.forms["myForm"];
	var div = document.getElementById("msgDiv");
	var p = document.getElementById("messageDisplay");
	if(div==null)//if it's null then #messageDisplay doesn't exist yet
	{
		div = document.createElement('div');
		div.id="msgDiv";
		p = document.createElement('p');
		p.id = "messageDisplay";
		p.className="invalidText";
	}
		p.appendChild(document.createTextNode(msg));
		p.innerHTML=p.innerHTML + "<br/>";
		div.appendChild(p);
		form.appendChild(div);
	
}