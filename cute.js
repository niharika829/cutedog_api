<!--cute dog_api-->
//to refresh the page
function reload(){
	document.location.reload(true);
	
}


var xhr= new XMLHttpRequest();
//request to the server
function dog()
{xhr.onreadystatechange = function(){
	if(this.readyState == 4 && this.status== 200) {
						var result= JSON.parse(xhr.responseText);
						console.dir(result.message);
						document.getElementById("load").style.display ="none";
						document.getElementById("get_pictures").style.display="block";
						document.getElementById("myimg").src = result.message;
						}};
			xhr.open('GET','https://dog.ceo/api/breeds/image/random',true);
			xhr.send();}



