const vowels = ["a", "e", "i", "o", "u"]

const isVowel = (c) => vowels.include(c)

const rules = [
	["cc", "x"],
	["c(e|i)", "z$1"],
	["qu", "c"],
	["ch", "q"],
	["g(e|i)", "j$1"],
	["gu(e|i)", "g$1"],
	["h", ""],
	["k", "c"],
	
	["w", "u"],
	["ñ", "h"],
	["y([^aeiou]|\W|$)", "i$1"],
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