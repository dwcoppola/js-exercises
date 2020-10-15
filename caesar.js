caesar = (input, shift) => {
alphabetUppercase = []
alphabetLowercase = []
position = 0
newString = ""
	for (a=0;a<26;a++) {
  		alphabetUppercase[a] = String.fromCharCode(65 + a);
  		alphabetLowercase[a] = String.fromCharCode(97 + a);
	};
	shift %= 26
	for (i=0;i<input.length;i++) {
		if (alphabetUppercase.includes(input[i]) == false && alphabetLowercase.includes(input[i]) == false) {
			newString += input[i]
		} else if (alphabetUppercase.includes(input[i]) == true) {
			position = alphabetUppercase.indexOf(input[i]) + shift
				if (position > 25) {position -= 26}
			newString += alphabetUppercase[position]
		} else {
			position = alphabetLowercase.indexOf(input[i]) + shift
				if (position > 25) {position -= 26}
			newString += alphabetLowercase[position]
		};
	};
	return newString
};