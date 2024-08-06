
let gameVersion = "ntsc-u";

const descriptiveNames = {
	"ntsc-u": "NTSC-U (American)",
	"ntsc-j": "NTSC-J (Japanese)",
	"pal": "PAL (European)",
	"shindou": "Shindou (Japanese)",
	"ique": "iQue (Chinese)"
}

const defaultColors = {
	"cap": {
		"base": "#ff0000",
		"shadow": "#7f0000"
	},
	"hair": {
		"base": "#730600",
		"shadow": "#390300"
	},
	"skin": {
		"base": "#fcbf79",
		"shadow": "#81603c"
	},
	"gloves": {
		"base": "#ffffff",
		"shadow": "#7f7f7f"
	},
	"overalls": {
		"base": "#0000ff",
		"shadow": "#00007f"
	},
	"shoes": {
		"base": "#701c0f",
		"shadow": "#2f0e07"
	}
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

const guideText = "┬ Hat & Shirt\n│\n│\n┘\n\n┬ Face\n│\n│\n┘\n\n┬ Gloves\n│\n│\n┘\n\n┬ Overalls\n│\n│\n┘\n\n┬ Hair\n│\n│\n┘\n\n┬ Shoes\n│\n│\n┘";

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

	const cheatName = prompt("Name for this colour code?", "My Colour Code");
	const code = document.getElementById("code").value;

	const basefile = `
	cheats = 1
	cheat0_desc = "${cheatName}"
	cheat0_enable = true
	cheat0_code = "${code.replaceAll("\n\n", ";").replaceAll("\n", ";")}"
	`
	const file = new Blob([basefile], { type: "txt" }); 
	const filename = `${cheatName}-${gameVersion}.cht`;
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
	document.querySelectorAll(".mario-color").forEach(elem => {
		const [part, type] = elem.id.split("-");
		elem.value = defaultColors[part][type];
		updatePreview(elem.id);
		console.log(elem.id, elem.value)
	}); 

	generate();
}


function updatePreview(id) {
	const color = document.getElementById(id).value;
	const target = id+"-img";
	const label = id+"-label";
	const filter = getFilter(color);
	document.getElementById(target).style.filter = filter;
	document.getElementById(label).textContent = color;
	console.log(filter);
	generate();
}

function generate(){

	const hat_base = document.getElementById("cap-base").value.replace("#","").match(/(..?)/g);
	const hat_shad = document.getElementById("cap-shadow").value.replace("#","").match(/(..?)/g);

	const hair_base = document.getElementById("hair-base").value.replace("#","").match(/(..?)/g);
	const hair_shad = document.getElementById("hair-shadow").value.replace("#","").match(/(..?)/g);

	const skin_base = document.getElementById("skin-base").value.replace("#","").match(/(..?)/g);
	const skin_shad = document.getElementById("skin-shadow").value.replace("#","").match(/(..?)/g);

	const glove_base = document.getElementById("gloves-base").value.replace("#","").match(/(..?)/g);
	const glove_shad = document.getElementById("gloves-shadow").value.replace("#","").match(/(..?)/g);

	const overalls_base = document.getElementById("overalls-base").value.replace("#","").match(/(..?)/g);
	const overalls_shad = document.getElementById("overalls-shadow").value.replace("#","").match(/(..?)/g);

	const shoe_base = document.getElementById("shoes-base").value.replace("#","").match(/(..?)/g);
	const shoe_shad = document.getElementById("shoes-shadow").value.replace("#","").match(/(..?)/g);
	// alert(hat_base[0])

	const code = `
	${memoryMappings[gameVersion].hat_shirt.shadow[0]} ${hat_shad[0]}${hat_shad[1]}
	${memoryMappings[gameVersion].hat_shirt.shadow[1]} ${hat_shad[2]}00
	${memoryMappings[gameVersion].hat_shirt.main[0]} ${hat_base[0]}${hat_base[1]}
	${memoryMappings[gameVersion].hat_shirt.main[1]} ${hat_base[2]}00

	${memoryMappings[gameVersion].skin.shadow[0]} ${skin_shad[0]}${skin_shad[1]}
	${memoryMappings[gameVersion].skin.shadow[1]} ${skin_shad[2]}00
	${memoryMappings[gameVersion].skin.main[0]} ${skin_base[0]}${skin_base[1]}
	${memoryMappings[gameVersion].skin.main[1]} ${skin_base[2]}00

	${memoryMappings[gameVersion].gloves.shadow[0]} ${glove_shad[0]}${glove_shad[1]}
	${memoryMappings[gameVersion].gloves.shadow[1]} ${glove_shad[2]}00
	${memoryMappings[gameVersion].gloves.main[0]} ${glove_base[0]}${glove_base[1]}
	${memoryMappings[gameVersion].gloves.main[1]} ${glove_base[2]}00

	${memoryMappings[gameVersion].overalls.shadow[0]} ${overalls_shad[0]}${overalls_shad[1]}
	${memoryMappings[gameVersion].overalls.shadow[1]} ${overalls_shad[2]}00
	${memoryMappings[gameVersion].overalls.main[0]} ${overalls_base[0]}${overalls_base[1]}
	${memoryMappings[gameVersion].overalls.main[1]} ${overalls_base[2]}00

	${memoryMappings[gameVersion].hair.shadow[0]} ${hair_shad[0]}${hair_shad[1]}
	${memoryMappings[gameVersion].hair.shadow[1]} ${hair_shad[2]}00
	${memoryMappings[gameVersion].hair.main[0]} ${hair_base[0]}${hair_base[1]}
	${memoryMappings[gameVersion].hair.main[1]} ${hair_base[2]}00

	${memoryMappings[gameVersion].shoes.shadow[0]} ${shoe_shad[0]}${shoe_shad[1]}
	${memoryMappings[gameVersion].shoes.shadow[1]} ${shoe_shad[2]}00
	${memoryMappings[gameVersion].shoes.main[0]} ${shoe_base[0]}${shoe_base[1]}
	${memoryMappings[gameVersion].shoes.main[1]} ${shoe_base[2]}00`;


	document.getElementById("code").value = code.replaceAll("\t","").replace("\n", "").toUpperCase();
	document.getElementById("guide").value = guideText;
	document.getElementById("type").innerHTML = `This code is for the <b>${descriptiveNames[gameVersion]}</b> version.`;

}