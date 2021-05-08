const vowels = ["a", "e", "i", "o", "u"]

const isVowel = (c) => vowels.include(c)

const rules = [
	["cc", "x"],
	["c(e|i|é|í)", "z$1"],
	["qu", "c"],
	["ch", "q"],
	["g(e|i|é|í)", "j$1"],
	["gu(e|i|é|í)", "g$1"],
	["h", ""],
	["k", "c"],
	
	["w", "u"],
	["ñ", "h"],
	["y([^aeiouáéíóú]|\W|$)", "i$1"],
	["ll", "y"],
	// ["z", "s"],
]

export function translate(str, wrapper=(x=>x)) {
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