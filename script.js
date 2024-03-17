function firstWord(s) {
	let ans = ""
	if(s.length == 0){
		return ans
	}
	let str = s.trim()
	for(let i of str){
		if(i == ' '){
			break
		}
		ans += i
	}
	return ans
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
