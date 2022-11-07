const a = require("./index")

let x = async () => {
	let b = await a()
	console.log("Test")
	console.log(b)
}

x()