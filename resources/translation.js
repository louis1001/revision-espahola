import { translate } from './espahol.js'
import { testText } from './temp.js'

addEventListener('load', ()=> {
	const txtInput = document.getElementById("txt-input")
	const output = document.getElementById("translate-output")

	function translateInput() {
		output.innerHTML = translate(txtInput.innerText, (x)=>
			"<span class='correxion'>" + x + "</span>"
		)
	}

	txtInput.addEventListener('keyup', ()=> translateInput())

	txtInput.innerText = testText
	translateInput(testText)

	let isReaction = false

	txtInput.addEventListener('scroll', ()=> {
		if (!isReaction) {
			output.scrollTo({top: txtInput.scrollTop})
			isReaction = true
		}  else {
			isReaction = false
		}
	})
	output.addEventListener('scroll', ()=>{
		if (!isReaction) {
			txtInput.scrollTo({top: output.scrollTop})
			isReaction = true
		} else {
			isReaction = false
		}
	})

	window.clearInput = ()=>{
		txtInput.innerText = ""
		output.innerText = ""
	}
})