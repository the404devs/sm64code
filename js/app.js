/*Runs on load*/
$(function () {
	document.getElementById("hair").style.width = "37%";//Make sure the hair image is the same as the rest of them
	setTimeout(function(){
		$("#body").css("background-image", "url(img/wallpaper.jpg)");//Load in background image
		$(".content").fadeIn();//Stuff fades in
		$(".footer").fadeIn();
	},1500);
	document.querySelector("div:not(.header):not(.content):not(.footer):not(.blob):not(.column):not(.footerWrapper):not(.blab):not(.row)").remove();//get rid of 000 branding
});


/*Image colour update code*/

function reset(){
	document.getElementById("capCol").value = "#ff0000";
	document.getElementById("pantsCol").value = "#0000ff";
	document.getElementById("faceCol").value = "#fcbf79";
	document.getElementById("hairCol").value = "#730600";
	document.getElementById("glovesCol").value = "#ffffff";
	document.getElementById("shoesCol").value = "#701c0f";
	updateCap();
	updatePants();
	updateFace();
	updateHair();
	updateGloves();
	updateShoes();
	document.getElementById("code").value = "";
	document.getElementById("type").innerHTML = "Click one of the buttons above once you've chosen your colours!";
}

function updateCap(){
	var newCol = document.getElementById("capCol").value;
	document.getElementById("cap").style.backgroundColor = newCol;
}

function updatePants(){
	var newCol = document.getElementById("pantsCol").value;
	document.getElementById("pants").style.backgroundColor = newCol;
}

function updateFace(){
	var newCol = document.getElementById("faceCol").value;
	document.getElementById("face").style.backgroundColor = newCol;
}

function updateHair(){
	var newCol = document.getElementById("hairCol").value;
	document.getElementById("hair").style.backgroundColor = newCol;
}

function updateGloves(){
	var newCol = document.getElementById("glovesCol").value;
	document.getElementById("gloves").style.backgroundColor = newCol;
}

function updateShoes(){
	var newCol = document.getElementById("shoesCol").value;
	document.getElementById("shoes").style.backgroundColor = newCol;
}


/*USA Code Generation*/

function generatePantsUSA(){
	var hex = document.getElementById("pantsCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107EC20 "+r+g+"\r\n8107EC22 "+b+"00\r\n8107EC24 "+r+g+"\r\n8107EC26 "+b+"00\r\n8107EC28 "+r+g+"\r\n8107EC2A "+b+"00\r\n8107EC2C "+r+g+"\r\n8107EC2E "+b+"00";
	return code;
}

function generateCapUSA(){
	var hex = document.getElementById("capCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107EC38 "+r+g+"\r\n8107EC3A "+b+"00\r\n8107EC3C "+r+g+"\r\n8107EC3E "+b+"00\r\n8107EC40 "+r+g+"\r\n8107EC42 "+b+"00\r\n8107EC44 "+r+g+"\r\n8107EC46 "+b+"00";
	return code;
}

function generateGlovesUSA(){
	var hex = document.getElementById("glovesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107EC50 "+r+g+"\r\n8107EC52 "+b+"00\r\n8107EC54 "+r+g+"\r\n8107EC56 "+b+"00\r\n8107EC58 "+r+g+"\r\n8107EC5A "+b+"00\r\n8107EC5C "+r+g+"\r\n8107EC5E "+b+"00";
	return code;
}

function generateShoesUSA(){
	var hex = document.getElementById("shoesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107EC68 "+r+g+"\r\n8107EC6A "+b+"00\r\n8107EC6C "+r+g+"\r\n8107EC6E "+b+"00\r\n8107EC70 "+r+g+"\r\n8107EC72 "+b+"00\r\n8107EC74 "+r+g+"\r\n8107EC76 "+b+"00";
	return code;
}

function generateFaceUSA(){
	var hex = document.getElementById("faceCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107EC80 "+r+g+"\r\n8107EC82 "+b+"00\r\n8107EC84 "+r+g+"\r\n8107EC86 "+b+"00\r\n8107EC88 "+r+g+"\r\n8107EC8A "+b+"00\r\n8107EC8C "+r+g+"\r\n8107EC8E "+b+"00";
	return code;
}

function generateHairUSA(){
	var hex = document.getElementById("hairCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107EC98 "+r+g+"\r\n8107EC9A "+b+"00\r\n8107EC9C "+r+g+"\r\n8107EC9E "+b+"00\r\n8107ECA0 "+r+g+"\r\n8107ECA2 "+b+"00\r\n8107ECA4 "+r+g+"\r\n8107ECA6 "+b+"00";
	return code;
}

function generateUSA(){
	document.getElementById("code").value = "";
	// alert("hi z");
	document.getElementById("code").value = generatePantsUSA()+"\r\n"+generateCapUSA()+"\r\n"+generateGlovesUSA()+"\r\n"+generateShoesUSA()+"\r\n"+generateFaceUSA()+"\r\n"+generateHairUSA();
	document.getElementById("type").innerHTML = "This code is for the <b>NTSC-U (American)</b> version.";
}


/*PAL Code Generation*/

function generatePantsPAL(){
	var hex = document.getElementById("pantsCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "810742E0 "+r+g+"\r\n810742E2 "+b+"00\r\n810742E4 "+r+g+"\r\n810742E6 "+b+"00\r\n810742E8 "+r+g+"\r\n810742EA "+b+"00\r\n810742EC "+r+g+"\r\n810742EE "+b+"00";
	return code;
}

function generateCapPAL(){
	var hex = document.getElementById("capCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "810742F8 "+r+g+"\r\n810742FA "+b+"00\r\n810742FC "+r+g+"\r\n810742FE "+b+"00\r\n81074300 "+r+g+"\r\n81074302 "+b+"00\r\n81074304 "+r+g+"\r\n81074306 "+b+"00";
	return code;
}

function generateGlovesPAL(){
	var hex = document.getElementById("glovesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "81074310 "+r+g+"\r\n81074312 "+b+"00\r\n81074314 "+r+g+"\r\n81074316 "+b+"00\r\n81074318 "+r+g+"\r\n8107431A "+b+"00\r\n8107431C "+r+g+"\r\n8107431E "+b+"00";
	return code;
}

function generateShoesPAL(){
	var hex = document.getElementById("shoesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "81074328 "+r+g+"\r\n8107432A "+b+"00\r\n8107432C "+r+g+"\r\n8107432E "+b+"00\r\n81074330 "+r+g+"\r\n81074332 "+b+"00\r\n81074334 "+r+g+"\r\n81074336 "+b+"00";
	return code;
}

function generateFacePAL(){
	var hex = document.getElementById("faceCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "81074340 "+r+g+"\r\n81074342 "+b+"00\r\n81074344 "+r+g+"\r\n81074346 "+b+"00\r\n81074348 "+r+g+"\r\n8107434A "+b+"00\r\n8107434C "+r+g+"\r\n8107434E "+b+"00";
	return code;
}

function generateHairPAL(){
	var hex = document.getElementById("hairCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "81074358 "+r+g+"\r\n8107435A "+b+"00\r\n8107435C "+r+g+"\r\n8107435E "+b+"00\r\n81074360 "+r+g+"\r\n81074362 "+b+"00\r\n81074364 "+r+g+"\r\n81074366 "+b+"00";
	return code;
}

function generatePAL(){
	document.getElementById("code").value = "";
	// alert("hi z");
	document.getElementById("code").value = generatePantsPAL()+"\r\n"+generateCapPAL()+"\r\n"+generateGlovesPAL()+"\r\n"+generateShoesPAL()+"\r\n"+generateFacePAL()+"\r\n"+generateHairPAL();
	document.getElementById("type").innerHTML = "This code is for the <b>PAL (European)</b> version.";
}


/*Japan Code Generation*/

function generatePantsJAP(){
	var hex = document.getElementById("pantsCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BDC0 "+r+g+"\r\n8107BDC2 "+b+"00\r\n8107BDC4 "+r+g+"\r\n8107BDC6 "+b+"00\r\n8107BDC8 "+r+g+"\r\n8107BDCA "+b+"00\r\n8107BDCC "+r+g+"\r\n8107BDCE "+b+"00";
	return code;
}

function generateCapJAP(){
	var hex = document.getElementById("capCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BDD8 "+r+g+"\r\n8107BDDA "+b+"00\r\n8107BDDC "+r+g+"\r\n8107BDDE "+b+"00\r\n8107BDE0 "+r+g+"\r\n8107BDE2 "+b+"00\r\n8107BDE4 "+r+g+"\r\n8107BDE6 "+b+"00";
	return code;
}

function generateGlovesJAP(){
	var hex = document.getElementById("glovesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BDF0 "+r+g+"\r\n8107BDF2 "+b+"00\r\n8107BDF4 "+r+g+"\r\n8107BDF6 "+b+"00\r\n8107BDF8 "+r+g+"\r\n8107BDFA "+b+"00\r\n8107BDFC "+r+g+"\r\n8107BDFE "+b+"00";
	return code;
}

function generateShoesJAP(){
	var hex = document.getElementById("shoesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BE08 "+r+g+"\r\n8107BE0A "+b+"00\r\n8107BE0C "+r+g+"\r\n8107BE0E "+b+"00\r\n8107BE10 "+r+g+"\r\n8107BE12 "+b+"00\r\n8107BE14 "+r+g+"\r\n8107BE16 "+b+"00";
	return code;
}

function generateFaceJAP(){
	var hex = document.getElementById("faceCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BE20 "+r+g+"\r\n8107BE22 "+b+"00\r\n8107BE24 "+r+g+"\r\n8107BE26 "+b+"00\r\n8107BE28 "+r+g+"\r\n8107BE2A "+b+"00\r\n8107BE2C "+r+g+"\r\n8107BE2E "+b+"00";
	return code;
}

function generateHairJAP(){
	var hex = document.getElementById("hairCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BE38 "+r+g+"\r\n8107BE3A "+b+"00\r\n8107BE3C "+r+g+"\r\n8107BE3E "+b+"00\r\n8107BE40 "+r+g+"\r\n8107BE42 "+b+"00\r\n8107BE44 "+r+g+"\r\n8107BE46 "+b+"00";
	return code;
}

function generateJAP(){
	document.getElementById("code").value = "";
	// alert("hi z");
	document.getElementById("code").value = generatePantsJAP()+"\r\n"+generateCapJAP()+"\r\n"+generateGlovesJAP()+"\r\n"+generateShoesJAP()+"\r\n"+generateFaceJAP()+"\r\n"+generateHairJAP();
	document.getElementById("type").innerHTML = "This code is for the <b>NTSC-J (Japanese)</b> version.";
}


/*Shindou Code Generation*/

function generatePantsSHI(){
	var hex = document.getElementById("pantsCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BDC0 "+r+g+"\r\n8107BDC2 "+b+"00\r\n8107BDC4 "+r+g+"\r\n8107BDC6 "+b+"00\r\n8107BDC8 "+r+g+"\r\n8107BDCA "+b+"00\r\n8107BDCC "+r+g+"\r\n8107BDCE "+b+"00";
	return code;
}

function generateCapSHI(){
	var hex = document.getElementById("capCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BDD8 "+r+g+"\r\n8107BDDA "+b+"00\r\n8107BDDC "+r+g+"\r\n8107BDDE "+b+"00\r\n8107BDE0 "+r+g+"\r\n8107BDE2 "+b+"00\r\n8107BDE4 "+r+g+"\r\n8107BDE6 "+b+"00";
	return code;
}

function generateGlovesSHI(){
	var hex = document.getElementById("glovesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BDF0 "+r+g+"\r\n8107BDF2 "+b+"00\r\n8107BDF4 "+r+g+"\r\n8107BDF6 "+b+"00\r\n8107BDF8 "+r+g+"\r\n8107BDFA "+b+"00\r\n8107BDFC "+r+g+"\r\n8107BDFE "+b+"00";
	return code;
}

function generateShoesSHI(){
	var hex = document.getElementById("shoesCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BE08 "+r+g+"\r\n8107BE0A "+b+"00\r\n8107BE0C "+r+g+"\r\n8107BE0E "+b+"00\r\n8107BE10 "+r+g+"\r\n8107BE12 "+b+"00\r\n8107BE14 "+r+g+"\r\n8107BE16 "+b+"00";
	return code;
}

function generateFaceSHI(){
	var hex = document.getElementById("faceCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BE20 "+r+g+"\r\n8107BE22 "+b+"00\r\n8107BE24 "+r+g+"\r\n8107BE26 "+b+"00\r\n8107BE28 "+r+g+"\r\n8107BE2A "+b+"00\r\n8107BE2C "+r+g+"\r\n8107BE2E "+b+"00";
	return code;
}

function generateHairSHI(){
	var hex = document.getElementById("hairCol").value;
	var r = hex.substr(1,2).toUpperCase();
	var g = hex.substr(3,2).toUpperCase();
	var b = hex.substr(5,2).toUpperCase();
	
	var code = "8107BE38 "+r+g+"\r\n8107BE3A "+b+"00\r\n8107BE3C "+r+g+"\r\n8107BE3E "+b+"00\r\n8107BE40 "+r+g+"\r\n8107BE42 "+b+"00\r\n8107BE44 "+r+g+"\r\n8107BE46 "+b+"00";
	return code;
}

function generateSHI(){
	document.getElementById("code").value = "";
	// alert("hi z");
	document.getElementById("code").value = generatePantsSHI()+"\r\n"+generateCapSHI()+"\r\n"+generateGlovesSHI()+"\r\n"+generateShoesSHI()+"\r\n"+generateFaceSHI()+"\r\n"+generateHairSHI();
	document.getElementById("type").innerHTML = "This code is for the <b>Japanese Shindou</b> version.";
}