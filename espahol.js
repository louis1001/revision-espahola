
const fs = require('fs')
const args = process.argv.slice(2)

function getArgContent() {
	const fileName = args[0]
	return fs.readFileSync(args[0], 'utf-8')
}

const rules = [
	["(?<!c)c(e|i)", "z$1"],
	["qu", "c"],
	["ch", "q"],
	["g(e|i)", "j$1"],
	["gu(e|i)", "g$1"],
	["h", ""],
	["k", "c"],
	["ll", "y"],
	["w", "u"],
	["ñ", "h"],
	// ["z", "s"],
]

function translate(str, wrapper=(x=>x)) {
	let result = str

	for (let i = 0; i < rules.length; i++) {
		let r = rules[i]
		let re = new RegExp(r[0], 'gi')
		if (true){//(i == rules.length-1) {
			result = result.replace(re, wrapper(r[1]))
		} else {
			result = result.replace(re, r[1])
		}
	}

	return result.toLowerCase()
}

const fileContent = getArgContent()
const translated = translate(fileContent, x =>
	"\u001b[33m" + x + "\u001b[m"
)

console.log(translated)