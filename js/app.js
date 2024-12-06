
let gameVersion = "ntsc-u";

let timer;

const descriptiveNames = {
	"ntsc-u": "NTSC-U (American)",
	"ntsc-j": "NTSC-J (Japanese)",
	"pal": "PAL (European)",
	"shindou": "Shindou (Japanese)",
	"ique": "iQue (Chinese)"
}

const defaultColors = {
	"name": "Default Mario",
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

let currentColorModel = JSON.parse(JSON.stringify(defaultColors));

const memoryMappings = {
	"ntsc-u": {
		"hat_shirt": {
			"shadow": ["8107EC38", "8107EC3A", "8107EC3C", "8107EC3E"],
			"main": ["8107EC40", "8107EC42", "8107EC44", "8107EC46"]
		},
		"hair": {
			"shadow": ["8107EC98", "8107EC9A", "8107EC9C", "8107EC9E"],
			"main": ["8107ECA0", "8107ECA2", "8107ECA4", "8107ECA6"]
		},
		"skin": {
			"shadow": ["8107EC80", "8107EC82", "8107EC84", "8107EC86"],
			"main": ["8107EC88", "8107EC8A", "8107EC8C", "8107EC8E"]
		},
		"gloves": {
			"shadow": ["8107EC50", "8107EC52", "8107EC54", "8107EC56"],
			"main": ["8107EC58", "8107EC5A", "8107EC5C", "8107EC5E"]
		},
		"overalls": {
			"shadow": ["8107EC20", "8107EC22", "8107EC24", "8107EC26"],
			"main": ["8107EC28", "8107EC2A", "8107EC2C", "8107EC2E"]
		},
		"shoes": {
			"shadow": ["8107EC68", "8107EC6A", "8107EC6C", "8107EC6E"],
			"main": ["8107EC70", "8107EC72", "8107EC74", "8107EC76"]
		}
	},
	"ntsc-j": {
		"hat_shirt": {
			"shadow": ["8107BDD8", "8107BDDA", "8107BDDC", "8107BDDE"],
			"main": ["8107BDE0", "8107BDE2", "8107BDE4", "8107BDE6"]
		},
		"hair": {
			"shadow": ["8107BE38", "8107BE3A", "8107BE3C", "8107BE3E"],
			"main": ["8107BE40", "8107BE42", "8107BE44", "8107BE46"]
		},
		"skin": {
			"shadow": ["8107BE20", "8107BE22", "8107BE24", "8107BE26"],
			"main": ["8107BE28", "8107BE2A", "8107BE2C", "8107BE2E"]
		},
		"gloves": {
			"shadow": ["8107BDF0", "8107BDF2", "8107BE24", "8107BE26"],
			"main": ["8107BDF8", "8107BDFA", "8107BE2C", "8107BE2E"]
		},
		"overalls": {
			"shadow": ["8107BDC0", "8107BDC2", "8107BDC4", "8107BDC6"],
			"main": ["8107BDC8", "8107BDCA", "8107BDCC", "8107BDCE"]
		},
		"shoes": {
			"shadow": ["8107BE08", "8107BE0A", "8107BE0C", "8107BE0E"],
			"main": ["8107BE10", "8107BE12", "8107BE14", "8107BE16"]
		}
	},
	"pal": {
		"hat_shirt": {
			"shadow": ["810742F8", "810742FA", "810742FC", "810742FE"],
			"main": ["81074300", "81074302", "81074304", "81074306"]
		},
		"hair": {
			"shadow": ["81074358", "8107435A", "8107435C", "8107435E"],
			"main": ["81074360", "81074362", "81074364", "81074366"]
		},
		"skin": {
			"shadow": ["81074340", "81074342", "81074344", "81074346"],
			"main": ["81074348", "8107434A", "8107434C", "8107434E"]
		},
		"gloves": {
			"shadow": ["81074310", "81074312", "81074314", "81074316"],
			"main": ["81074318", "8107431A", "8107431C", "8107431E"]
		},
		"overalls": {
			"shadow": ["810742E0", "810742E2", "810742E4", "810742E6"],
			"main": ["810742E8", "810742EA", "810742EC", "810742EE"]
		},
		"shoes": {
			"shadow": ["81074328", "8107432A", "8107432C", "8107432E"],
			"main": ["81074330", "81074332", "81074334", "81074336"]
		}
	},
	"shindou": {
		"hat_shirt": {
			"shadow": ["8107BDD8", "8107BDDA", "8107BDDC", "8107BDDE"],
			"main": ["8107BDE0", "8107BDE2", "8107BDE4", "8107BDE6"]
		},
		"hair": {
			"shadow": ["8107BE38", "8107BE3A", "8107BE3C", "8107BE3E"],
			"main": ["8107BE40", "8107BE42", "8107BE44", "8107BE46"]
		},
		"skin": {
			"shadow": ["8107BE20", "8107BE22", "8107BE24", "8107BE26"],
			"main": ["8107BE28", "8107BE2A", "8107BE2C", "8107BE2E"]
		},
		"gloves": {
			"shadow": ["8107BDF0", "8107BDF2", "8107BDF4", "8107BDF6"],
			"main": ["8107BDF8", "8107BDFA", "8107BDFC", "8107BDFE"]
		},
		"overalls": {
			"shadow": ["8107BDC0", "8107BDC2", "8107BDC4", "8107BDC6"],
			"main": ["8107BDC8", "8107BDCA", "8107BDCC", "8107BDCE"]
		},
		"shoes": {
			"shadow": ["8107BE08", "8107BE0A", "8107BE0C", "8107BE0E"],
			"main": ["8107BE10", "8107BE12", "8107BE14", "8107BE16"]
		}
	},
	"ique": {
		"hat_shirt": {
			"shadow": ["810610A8", "810610AA", "810610AC", "810610AE"],
			"main": ["810610B0", "810610B2", "810610B4", "810610B6"]
		},
		"hair": {
			"shadow": ["81061108", "8106110A", "8106110C", "8106110E"],
			"main": ["81061110", "81061112", "81061114", "81061116"]
		},
		"skin": {
			"shadow": ["810610F0", "810610F2", "810610F4", "810610F6"],
			"main": ["810610F8", "810610FA", "810610FC", "810610FE"]
		},
		"gloves": {
			"shadow": ["810610C0", "810610C2", "810610C4", "810610C6"],
			"main": ["810610C8", "810610CA", "810610CC", "810610CE"]
		},
		"overalls": {
			"shadow": ["81061090", "81061092", "81061094", "81061096"],
			"main": ["81061098", "8106109A", "8106109C", "8106109E"]
		},
		"shoes": {
			"shadow": ["810610D8", "810610DA", "810610DC", "810610DE"],
			"main": ["810610E0", "810610E2", "810610E4", "810610E6"]
		}
	}
}

const guideText = "┬ Hat & Shirt\n│\n│\n│\n│\n│\n│\n┘\n\n┬ Face\n│\n│\n│\n│\n│\n│\n┘\n\n┬ Gloves\n│\n│\n│\n│\n│\n│\n┘\n\n┬ Overalls\n│\n│\n│\n│\n│\n│\n┘\n\n┬ Hair\n│\n│\n│\n│\n│\n│\n┘\n\n┬ Shoes\n│\n│\n│\n│\n│\n│\n┘";

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

function save() {
	const uuid = "sm64cc-" + crypto.randomUUID();
	localStorage.setItem(uuid, JSON.stringify(currentColorModel));
	readLocalStorage();

	const menu = document.getElementById("color-menu");
	menu.classList.add("shown");
}

function updateName(str) {
	currentColorModel.name = str;
}

function readLocalStorage() {
	const menu = document.getElementById("color-list");
	menu.replaceChildren();
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		
		if (key.startsWith("sm64cc-")) {
			const code = JSON.parse(localStorage.getItem(key));
			console.log(code)

			const colorEntry = document.createElement("div");
			colorEntry.classList.add("color-entry");

			colorEntry.innerHTML = `
				<span class="color-header">${code.name}</span>
				<div class="color-options">
            		<a onclick="load(this.parentElement.parentElement.getAttribute('uuid'))"><i class="fas fa-cloud-arrow-up" aria-hidden="true"></i>Load</a>
            		<a onclick="remove(this.parentElement.parentElement.getAttribute('uuid'))"><i class="fas fa-trash-can" aria-hidden="true"></i>Delete</a>
				</div>
			`;

			let allColors = [];
			Object.keys(code).forEach(part => {
				if (part != "name") {
					allColors.push(code[part]["base"], code[part]["shadow"])
				}
			});

			colorEntry.style.background = `linear-gradient(45deg, ${allColors.toString()})`

			colorEntry.setAttribute("uuid", key);

			if (navigator.userAgentData && navigator.userAgentData.mobile) {
				colorEntry.onclick = function() { this.classList.toggle('expanded') }
			}

			menu.appendChild(colorEntry);
		}
	}
}

function remove(uuid) {
	localStorage.removeItem(uuid);
	readLocalStorage();
}

function load(uuid) {
	console.log(uuid)
	currentColorModel = JSON.parse(localStorage.getItem(uuid));

	document.querySelectorAll(".mario-color").forEach(elem => {
		const [part, type] = elem.id.split("-");
		elem.value = currentColorModel[part][type];
		updatePreview(elem.id);
		// console.log(elem.id, elem.value)
	}); 

	document.getElementById("code-name").value = currentColorModel["name"];

	generate();
}

function star() {
	if (!timer) {
		timer = setInterval(randomize, 50);
	} else {
		clearInterval(timer);
		timer = null;
	}
}

/*Image colour update code*/

function reset(){
	document.querySelectorAll(".mario-color").forEach(elem => {
		const [part, type] = elem.id.split("-");
		elem.value = defaultColors[part][type];
		updatePreview(elem.id);
		// console.log(elem.id, elem.value)
	}); 

	document.getElementById("code-name").value = defaultColors["name"];

	generate();
}

function toggleColorMenu() {
	if (window.innerWidth <= 1000 && document.getElementById("help-menu").classList.contains("shown")) {
		document.getElementById("help-menu").classList.remove("shown");
	}
	document.getElementById("color-menu").classList.toggle("shown");
}

function toggleHelpMenu() {
	if (window.innerWidth <= 1000 && document.getElementById("color-menu").classList.contains("shown")) {
		document.getElementById("color-menu").classList.remove("shown");
	}
	document.getElementById("help-menu").classList.toggle("shown");
}

function randomize() {
	document.querySelectorAll(".mario-color").forEach(elem => {
		elem.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
		updatePreview(elem.id);
		// console.log(elem.id, elem.value)
	});
	
	document.getElementById("code-name").value = "Randomized Mario";
	currentColorModel.name = "Randomized Mario";

	generate();
}

function getCodeName() {
	const field = document.getElementById("code-name");
	field.classList.remove("error");
	void field.offsetWidth; // trigger reflow
	const name = field.value;
	if (name) {
		return name;
	} else {
		field.classList.toggle("error");
		return null;
	}
}

function updatePreview(id) {
	const color = document.getElementById(id).value;
	const preview = document.getElementById('preview');
	const target = id+"-img";
	const label = id+"-label";
	preview.classList.remove('bubble');
	void preview.offsetWidth; // trigger reflow

	const [part, type] = id.split("-");
	currentColorModel[part][type] = color;
	const filter = getFilter(color);
	document.getElementById(target).style.filter = filter;
	document.getElementById(label).textContent = color;

	preview.classList.add('bubble');
	generate();
}


function getCurrentColorModel() {
	document.querySelectorAll(".mario-color").forEach(elem => {
		const [part, type] = elem.id.split("-");
		currentColorModel[part][type] = elem.value;
	}); 
}

function generate(){
	//TODO: use currentColorModel
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
	${memoryMappings[gameVersion].hat_shirt.shadow[2]} ${hat_shad[0]}${hat_shad[1]}
	${memoryMappings[gameVersion].hat_shirt.shadow[3]} ${hat_shad[2]}00
	${memoryMappings[gameVersion].hat_shirt.main[2]} ${hat_base[0]}${hat_base[1]}
	${memoryMappings[gameVersion].hat_shirt.main[3]} ${hat_base[2]}00

	${memoryMappings[gameVersion].skin.shadow[0]} ${skin_shad[0]}${skin_shad[1]}
	${memoryMappings[gameVersion].skin.shadow[1]} ${skin_shad[2]}00
	${memoryMappings[gameVersion].skin.main[0]} ${skin_base[0]}${skin_base[1]}
	${memoryMappings[gameVersion].skin.main[1]} ${skin_base[2]}00
	${memoryMappings[gameVersion].skin.shadow[2]} ${skin_shad[0]}${skin_shad[1]}
	${memoryMappings[gameVersion].skin.shadow[3]} ${skin_shad[2]}00
	${memoryMappings[gameVersion].skin.main[2]} ${skin_base[0]}${skin_base[1]}
	${memoryMappings[gameVersion].skin.main[3]} ${skin_base[2]}00

	${memoryMappings[gameVersion].gloves.shadow[0]} ${glove_shad[0]}${glove_shad[1]}
	${memoryMappings[gameVersion].gloves.shadow[1]} ${glove_shad[2]}00
	${memoryMappings[gameVersion].gloves.main[0]} ${glove_base[0]}${glove_base[1]}
	${memoryMappings[gameVersion].gloves.main[1]} ${glove_base[2]}00
	${memoryMappings[gameVersion].gloves.shadow[2]} ${glove_shad[0]}${glove_shad[1]}
	${memoryMappings[gameVersion].gloves.shadow[3]} ${glove_shad[2]}00
	${memoryMappings[gameVersion].gloves.main[2]} ${glove_base[0]}${glove_base[1]}
	${memoryMappings[gameVersion].gloves.main[3]} ${glove_base[2]}00

	${memoryMappings[gameVersion].overalls.shadow[0]} ${overalls_shad[0]}${overalls_shad[1]}
	${memoryMappings[gameVersion].overalls.shadow[1]} ${overalls_shad[2]}00
	${memoryMappings[gameVersion].overalls.main[0]} ${overalls_base[0]}${overalls_base[1]}
	${memoryMappings[gameVersion].overalls.main[1]} ${overalls_base[2]}00
	${memoryMappings[gameVersion].overalls.shadow[2]} ${overalls_shad[0]}${overalls_shad[1]}
	${memoryMappings[gameVersion].overalls.shadow[3]} ${overalls_shad[2]}00
	${memoryMappings[gameVersion].overalls.main[2]} ${overalls_base[0]}${overalls_base[1]}
	${memoryMappings[gameVersion].overalls.main[3]} ${overalls_base[2]}00

	${memoryMappings[gameVersion].hair.shadow[0]} ${hair_shad[0]}${hair_shad[1]}
	${memoryMappings[gameVersion].hair.shadow[1]} ${hair_shad[2]}00
	${memoryMappings[gameVersion].hair.main[0]} ${hair_base[0]}${hair_base[1]}
	${memoryMappings[gameVersion].hair.main[1]} ${hair_base[2]}00
	${memoryMappings[gameVersion].hair.shadow[2]} ${hair_shad[0]}${hair_shad[1]}
	${memoryMappings[gameVersion].hair.shadow[3]} ${hair_shad[2]}00
	${memoryMappings[gameVersion].hair.main[2]} ${hair_base[0]}${hair_base[1]}
	${memoryMappings[gameVersion].hair.main[3]} ${hair_base[2]}00

	${memoryMappings[gameVersion].shoes.shadow[0]} ${shoe_shad[0]}${shoe_shad[1]}
	${memoryMappings[gameVersion].shoes.shadow[1]} ${shoe_shad[2]}00
	${memoryMappings[gameVersion].shoes.main[0]} ${shoe_base[0]}${shoe_base[1]}
	${memoryMappings[gameVersion].shoes.main[1]} ${shoe_base[2]}00
	${memoryMappings[gameVersion].shoes.shadow[2]} ${shoe_shad[0]}${shoe_shad[1]}
	${memoryMappings[gameVersion].shoes.shadow[3]} ${shoe_shad[2]}00
	${memoryMappings[gameVersion].shoes.main[2]} ${shoe_base[0]}${shoe_base[1]}
	${memoryMappings[gameVersion].shoes.main[3]} ${shoe_base[2]}00`;

	


	document.getElementById("code").value = code.replaceAll("\t","").replace("\n", "").toUpperCase();
	document.getElementById("guide").value = guideText;
	// document.getElementById("type").innerHTML = `This code is for the <b>${descriptiveNames[gameVersion]}</b> version.`;

}