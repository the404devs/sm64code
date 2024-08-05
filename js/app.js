
let gameVersion = "ntsc-u";

const descriptiveNames = {
	"ntsc-u": "NTSC-U (American)",
	"ntsc-j": "NTSC-J (Japanese)",
	"pal": "PAL (European)",
	"shindou": "Shindou (Japanese)",
	"ique": "iQue (Chinese)"
}

function switchGameVersion() {
	gameVersion = document.getElementById("gameVer").value;
	generate();
}

function copy() {
	const codeField = document.getElementById("code");

	codeField.select();
	codeField.setSelectionRange(0, 99999); 
  
	navigator.clipboard.writeText(codeField.value);
}

function download() {
	const code = document.getElementById("code").value;

	const basefile = `
	cheats = 1
	cheat0_desc = "Custom Colours"
	cheat0_enable = false
	cheat0_code = "${code.replaceAll("\n\n", ";").replaceAll("\n", ";")}"
	`
	const file = new Blob([basefile], { type: "txt" }); 
	const filename = `sm64-color-code-${gameVersion}.cht`;
	if (window.navigator.msSaveOrOpenBlob) // IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	else { // Others
		const a = document.createElement("a"); //Creating an a element
		const url = URL.createObjectURL(file); //Get url to our newly made file
		a.href = url; //Set that as the href of our a tag
		a.download = filename; //Set the download property to our filename
		document.body.appendChild(a); //Add the a tag to the page
		a.click(); //Click it
		setTimeout(function() {
			document.body.removeChild(a); //Remove it
			window.URL.revokeObjectURL(url); //Get rid of the url to our file
		}, 0);
	}
}

/*Image colour update code*/

function reset(){
	document.getElementById("capBase").value = "#ff0000";
	document.getElementById("pantsBase").value = "#0000ff";
	document.getElementById("skinBase").value = "#fcbf79";
	document.getElementById("hairBase").value = "#730600";
	document.getElementById("glovesBase").value = "#ffffff";
	document.getElementById("shoesBase").value = "#701c0f";

	document.getElementById("capShad").value = "#7f0000";
	document.getElementById("pantsShad").value = "#00007f";
	document.getElementById("skinShad").value = "#81603c";
	document.getElementById("hairShad").value = "#390300";
	document.getElementById("glovesShad").value = "#7f7f7f";
	document.getElementById("shoesShad").value = "#2f0e07";

	updateCap();
	updatePants();
	updateFace();
	updateHair();
	updateGloves();
	updateShoes();

	generate()
}

function updateCap(){
	var newCol = document.getElementById("capBase").value;
	document.getElementById("cap").style.backgroundColor = newCol;
	generate();
}

function updatePants(){
	var newCol = document.getElementById("pantsBase").value;
	document.getElementById("pants").style.backgroundColor = newCol;
	generate();
}

function updateFace(){
	var newCol = document.getElementById("skinBase").value;
	document.getElementById("face").style.backgroundColor = newCol;
	generate();
}

function updateHair(){
	var newCol = document.getElementById("hairBase").value;
	document.getElementById("hair").style.backgroundColor = newCol;
	generate();
}

function updateGloves(){
	var newCol = document.getElementById("glovesBase").value;
	document.getElementById("gloves").style.backgroundColor = newCol;
	generate();
}

function updateShoes(){
	var newCol = document.getElementById("shoesBase").value;
	document.getElementById("shoes").style.backgroundColor = newCol;
	generate();
}

function generate(){

	const hat_base = document.getElementById("capBase").value.replace("#","").match(/(..?)/g);
	const hat_shad = document.getElementById("capShad").value.replace("#","").match(/(..?)/g);

	const hair_base = document.getElementById("hairBase").value.replace("#","").match(/(..?)/g);
	const hair_shad = document.getElementById("hairShad").value.replace("#","").match(/(..?)/g);

	const skin_base = document.getElementById("skinBase").value.replace("#","").match(/(..?)/g);
	const skin_shad = document.getElementById("skinShad").value.replace("#","").match(/(..?)/g);

	const glove_base = document.getElementById("glovesBase").value.replace("#","").match(/(..?)/g);
	const glove_shad = document.getElementById("glovesShad").value.replace("#","").match(/(..?)/g);

	const pants_base = document.getElementById("pantsBase").value.replace("#","").match(/(..?)/g);
	const pants_shad = document.getElementById("pantsShad").value.replace("#","").match(/(..?)/g);

	const shoe_base = document.getElementById("shoesBase").value.replace("#","").match(/(..?)/g);
	const shoe_shad = document.getElementById("shoesShad").value.replace("#","").match(/(..?)/g);
	// alert(hat_base[0])

	const code = `
	${memoryMappings[gameVersion].hat_shirt.shadow[0]} ${hat_shad[0]}${hat_shad[1]}
	${memoryMappings[gameVersion].hat_shirt.shadow[1]} ${hat_shad[2]}00
	${memoryMappings[gameVersion].hat_shirt.main[0]} ${hat_base[0]}${hat_base[1]}
	${memoryMappings[gameVersion].hat_shirt.main[1]} ${hat_base[2]}00

	${memoryMappings[gameVersion].hair.shadow[0]} ${hair_shad[0]}${hair_shad[1]}
	${memoryMappings[gameVersion].hair.shadow[1]} ${hair_shad[2]}00
	${memoryMappings[gameVersion].hair.main[0]} ${hair_base[0]}${hair_base[1]}
	${memoryMappings[gameVersion].hair.main[1]} ${hair_base[2]}00

	${memoryMappings[gameVersion].skin.shadow[0]} ${skin_shad[0]}${skin_shad[1]}
	${memoryMappings[gameVersion].skin.shadow[1]} ${skin_shad[2]}00
	${memoryMappings[gameVersion].skin.main[0]} ${skin_base[0]}${skin_base[1]}
	${memoryMappings[gameVersion].skin.main[1]} ${skin_base[2]}00

	${memoryMappings[gameVersion].gloves.shadow[0]} ${glove_shad[0]}${glove_shad[1]}
	${memoryMappings[gameVersion].gloves.shadow[1]} ${glove_shad[2]}00
	${memoryMappings[gameVersion].gloves.main[0]} ${glove_base[0]}${glove_base[1]}
	${memoryMappings[gameVersion].gloves.main[1]} ${glove_base[2]}00

	${memoryMappings[gameVersion].overalls.shadow[0]} ${pants_shad[0]}${pants_shad[1]}
	${memoryMappings[gameVersion].overalls.shadow[1]} ${pants_shad[2]}00
	${memoryMappings[gameVersion].overalls.main[0]} ${pants_base[0]}${pants_base[1]}
	${memoryMappings[gameVersion].overalls.main[1]} ${pants_base[2]}00

	${memoryMappings[gameVersion].shoes.shadow[0]} ${shoe_shad[0]}${shoe_shad[1]}
	${memoryMappings[gameVersion].shoes.shadow[1]} ${shoe_shad[2]}00
	${memoryMappings[gameVersion].shoes.main[0]} ${shoe_base[0]}${shoe_base[1]}
	${memoryMappings[gameVersion].shoes.main[1]} ${shoe_base[2]}00
	`;

	document.getElementById("code").value = code.replaceAll("\t","").replace("\n", "");

	document.getElementById("type").innerHTML = `This code is for the <b>${descriptiveNames[gameVersion]}</b> version.`;

}

const memoryMappings = {
	"ntsc-u": {
		"hat_shirt": {
			"shadow": ["8107EC38", "8107EC3A"],
			"main": ["8107EC40", "8107EC42"]
		},
		"hair": {
			"shadow": ["8107EC98", "8107EC9A"],
			"main": ["8107ECA0", "8107ECA2"]
		},
		"skin": {
			"shadow": ["8107EC80", "8107EC82"],
			"main": ["8107EC88", "8107EC8A"]
		},
		"gloves": {
			"shadow": ["8107EC50", "8107EC52"],
			"main": ["8107EC58", "8107EC5A"]
		},
		"overalls": {
			"shadow": ["8107EC20", "8107EC22"],
			"main": ["8107EC28", "8107EC2A"]
		},
		"shoes": {
			"shadow": ["8107EC68", "8107EC6A"],
			"main": ["8107EC70", "8107EC72"]
		}
	},
	"ntsc-j": {
		"hat_shirt": {
			"shadow": ["8107BDD8", "8107BDDA"],
			"main": ["8107BDE0", "8107BDE2"]
		},
		"hair": {
			"shadow": ["8107BE38", "8107BE3A"],
			"main": ["8107BE40", "8107BE42"]
		},
		"skin": {
			"shadow": ["8107BE20", "8107BE22"],
			"main": ["8107BE28", "8107BE2A"]
		},
		"gloves": {
			"shadow": ["8107BDF0", "8107BDF2"],
			"main": ["8107BDF8", "8107BDFA"]
		},
		"overalls": {
			"shadow": ["8107BDC0", "8107BDC2"],
			"main": ["8107BDC8", "8107BDCA"]
		},
		"shoes": {
			"shadow": ["8107BE08", "8107BE0A"],
			"main": ["8107BE10", "8107BE12"]
		}
	},
	"pal": {
		"hat_shirt": {
			"shadow": ["810742F8", "810742FA"],
			"main": ["81074300", "81074302"]
		},
		"hair": {
			"shadow": ["81074358", "8107435A"],
			"main": ["81074360", "81074362"]
		},
		"skin": {
			"shadow": ["81074340", "81074342"],
			"main": ["81074348", "8107434A"]
		},
		"gloves": {
			"shadow": ["81074310", "81074312"],
			"main": ["81074318", "8107431A"]
		},
		"overalls": {
			"shadow": ["810742E0", "810742E2"],
			"main": ["810742E8", "810742EA"]
		},
		"shoes": {
			"shadow": ["81074328", "8107432A"],
			"main": ["81074330", "81074332"]
		}
	},
	"shindou": {
		"hat_shirt": {
			"shadow": ["8107BDD8", "8107BDDA"],
			"main": ["8107BDE0", "8107BDE2"]
		},
		"hair": {
			"shadow": ["8107BE38", "8107BE3A"],
			"main": ["8107BE40", "8107BE42"]
		},
		"skin": {
			"shadow": ["8107BE20", "8107BE22"],
			"main": ["8107BE28", "8107BE2A"]
		},
		"gloves": {
			"shadow": ["8107BDF0", "8107BDF2"],
			"main": ["8107BDF8", "8107BDFA"]
		},
		"overalls": {
			"shadow": ["8107BDC0", "8107BDC2"],
			"main": ["8107BDC8", "8107BDCA"]
		},
		"shoes": {
			"shadow": ["8107BE08", "8107BE0A"],
			"main": ["8107BE10", "8107BE12"]
		}
	},
	"ique": {
		"hat_shirt": {
			"shadow": ["810610A8", "810610AA"],
			"main": ["810610B0", "810610B2"]
		},
		"hair": {
			"shadow": ["81061108", "8106110A"],
			"main": ["81061110", "81061112"]
		},
		"skin": {
			"shadow": ["810610F0", "810610F2"],
			"main": ["810610F8", "810610FA"]
		},
		"gloves": {
			"shadow": ["810610C0", "810610C2"],
			"main": ["810610C8", "810610CA"]
		},
		"overalls": {
			"shadow": ["81061090", "81061092"],
			"main": ["81061098", "8106109A"]
		},
		"shoes": {
			"shadow": ["810610D8", "810610DA"],
			"main": ["810610E0", "810610E2"]
		}
	}
}