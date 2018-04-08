
n drag()
{
	var win = document.getElementById("window");
	var x = win.offsetLeft;
	var y = win.offsetTop;
	alert(x);
}
alert("溫馨小提醒:按下滑鼠窗戶就會動，放開就停止。");
var tID;
var ymove=-1;
var man=0;
function startmove()
{
	tID = setInterval(move,1);
}
function move()
{
	document.getElementById("lai_word").style.display="none";
	document.getElementById("chung_word").style.display="none";
	var win = document.getElementById("window");
	var y = win.offsetTop+ymove;
	win.style.top = y+"px";
	if(y==-202)
	{
		clearInterval(tID);
		ymove=1;
		document.getElementById("who").style.display="none";
		document.getElementById("intro").style.display="none";
		if(man==0)
		{
			document.getElementById("lai").style.display="block";
			document.getElementById("lai_intro").style.display="block";
			document.getElementById("lai_word").style.display="block";
		}
		else if(man==1)
		{
			document.getElementById("chung").style.display="block";
			document.getElementById("chung_intro").style.display="block";
			document.getElementById("chung_word").style.display="block";
		}
	}
	if(y==28)
	{
		clearInterval(tID);
		ymove=-1;
		document.getElementById("chung").style.display="none";
		document.getElementById("lai").style.display="none";
		document.getElementById("who").style.display="block";
		document.getElementById("lai_intro").style.display="none";
		document.getElementById("chung_intro").style.display="none";
		document.getElementById("intro").style.display="block";
		if(man==0)
		{
			document.getElementById("lai_photo").style.display="none";
			document.getElementById("chung_photo").style.display="block";
		}
		else if(man==1)
		{
			document.getElementById("lai_photo").style.display="block";
			document.getElementById("chung_photo").style.display="none";
		}
		man=1-man;
	}
}
function stopmove()
{
	clearInterval(tID);
}
