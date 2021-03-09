window.onscroll = function () { myFunction() };

function myFunction() {
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (document.documentElement.scrollTop / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}