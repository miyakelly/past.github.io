      var a = 0;      var images = new Array("0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png");      var countimages = 0;      var countimagesd = 0;   function startTime()      {	if(a)	{		a = 0;	}		var tDate = new Date();

	/*if(countimages == images.length)	{		countimages = 0;	}	if(tDate.getSeconds() % 1 == 0)	{		document.getElementById("s2").src = images[countimages];                document.getElementById("s1").src = images[countimagesd];	}*/
	
	var h = tDate.getHours();
	var th= h % 10;
	var m = tDate.getMinutes();
	var tm= m % 10;
	var s = tDate.getSeconds();
	var ts= s % 10;

		document.getElementById("h1").src = images[(h-th)/10];
		document.getElementById("h2").src = images[th];		
		document.getElementById("m1").src = images[(m-tm)/10];
		document.getElementById("m2").src = images[tm];
		document.getElementById("s1").src = images[(s-ts)/10];
		document.getElementById("s2").src = images[ts];
	
	a = setTimeout("startTime()", 1000);
	
}