function moveHands()
 	{
	  with (new Date()) 
	  {
	  	var day = getDay()+1;
	  	var month = getMonth()+1;
	  	var num = getDate();
	    h = 30 * ((getHours() % 12) + getMinutes() / 60);
	    m = 6 * getMinutes();
	    s = 6 * getSeconds();
	    switch (day) {
			case 1:
			day = "SUN";
			break;
			case 2:
			day = "MON";
			break;
			case 3:
			 day = "TUE";
			break;
			case 4:
			day = "WED";
			break;
			case 5:
			day = "THU";
			break;
			case 6:
			day = "FRI";
			break;
			case 7:
			day = "SAT";
			break;
		}

		switch (month) {
			case 1:
			month = "JAN";
			break;
			case 2:
			month = "FEB";
			break;
			case 3:
			month = "MAR";
			break;
			case 4:
			month = "APR";
			break;
			case 5:
			month = "MAY";
			break;
			case 6:
			month = "JUN";
			break;
			case 7:
			month = "JUL";
			break;
			case 8:
			month = "AUG";
			break;
			case 9:
			month = "SEP";
			break;
			case 10:
			month = "OCT";
			break;
			case 11:
			month = "NOV";
			break;
			case 12:
			month = "DEC";
			break;
		}
	    document.getElementById("sec-hand").style.cssText =
	      "transform:rotate(" + s + "deg);";
	    document.getElementById("min-hand").style.cssText =
	      "transform:rotate(" + m + "deg);";
	    document.getElementById("hour-hand").style.cssText =
	      "transform:rotate(" + h + "deg);";
	    document.getElementById("hr").innerHTML = getHours();
	    document.getElementById("min").innerHTML = getMinutes();
	    document.getElementById("sec").innerHTML = getSeconds();
		document.getElementById("day").innerHTML = day;
		document.getElementById("month").innerHTML = month;
		document.getElementById("date").innerHTML = num;

	    if (getSeconds() < 10)
	    {
	    	document.getElementById("sec").innerHTML = "0"+getSeconds();
	    }
	    if (getMinutes() < 10)
	    {
	    	document.getElementById("min").innerHTML = "0"+getMinutes();
	    }
		if (getHours() < 10)
	    {
	    	document.getElementById("hr").innerHTML = "0"+getHours();
	    }
	    if (getHours() > 12)
	    {
	    	document.getElementById("hr").innerHTML = getHours()-12;
	    	if ((getHours()-12) < 10)
	    	{
	    		document.getElementById("hr").innerHTML ='0'+(getHours()-12);
	    	}
	    }
	    if (getHours() >= 0 && getHours() <= 11)
	    	{
	    		document.getElementById("am-pm").innerHTML = "AM";
	    	}
    	else if(getHours() >= 12 && getHours() <= 23)
    	{
    		document.getElementById("am-pm").innerHTML = "PM";
    	}
		 setTimeout(moveHands, 1000);
		}
	}
	window.onload = moveHands;
	function slide()
	{
		if (document.getElementById('spacer').style.flexGrow == '1')
		{
			document.getElementById('spacer').style.flexGrow = '0';

			document.body.style.background = '#E0E0E0';
			document.getElementById('clock').style.cssText = "background-color: #E0E0E0;border: 4px #E0E0E0 solid;";
			document.getElementById('digital').style.cssText = "background-color: #E0E0E0;border: 5px #E0E0E0 solid;";
			document.getElementById('date').style.cssText = "background-color: #E0E0E0;border: 1px #E0E0E0 solid;";
			var bColor = document.getElementsByClassName('black');
			document.getElementById('toggle').style.background = '#CECECE';
			document.getElementById('light').style.background = '#CECECE';
			document.getElementById('icon').style.color = '#999999';
			for (var i = 0; i < bColor.length; i++) {
				bColor[i].style.color = '#1b1e22';
			}
		}
		else{
			document.getElementById('spacer').style.flexGrow = '1';

			document.body.style.background = '#1b1e22';
			document.getElementById('clock').style.cssText = "background-color: #1b1e22;border: 4px #1b1e22 solid;";
			document.getElementById('digital').style.cssText = "background-color: #1b1e22;border: 5px #1b1e22 solid;";
			document.getElementById('date').style.cssText = "background-color: #1b1e22;border: 1px #1b1e22 solid;";
			var bColor = document.getElementsByClassName('black');
			document.getElementById('toggle').style.background = 'red';
			document.getElementById('light').style.background = 'red';
			document.getElementById('icon').style.color = 'red';
			for (var i = 0; i < bColor.length; i++) {
				bColor[i].style.color = '#f7f7f7';
			}
		}
		
	}
