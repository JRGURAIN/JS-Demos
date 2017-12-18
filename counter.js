var c=0
var t
var aaa
function timedCount()
{
if (document.form1.ok.value=="开始计时！")
   {
     document.form1.ok.value="停止计时！";
	aaa=timedCounts();
   }
   else
   {
     document.form1.ok.value="开始计时！";
	c=0;
	setTimeout("document.getElementById('txt').value=0",0);
	clearTimeout(t);
   }

}
function timedCounts()
{
	document.getElementById('txt').value=c
	c=c+1
	t=setTimeout("timedCounts()",1000)
   }

