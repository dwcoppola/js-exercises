function palindrome(input) {
var reverse = ""
var newInput = ""
var capsInput
capsInput = input.toUpperCase(); 
  for (i=0;i<input.length;i++) {
    if ((capsInput.charCodeAt(i) >= 65) && (capsInput.charCodeAt(i) <= 90)) {
    newInput = newInput + capsInput.charAt(i).toUpperCase();
    };
  };
  for (i=newInput.length-1;i>-1;i--) {
    reverse = reverse + newInput.charAt(i);
  };
  if ((reverse == newInput) == true) {
    return `${input} is a palindrome.`;
    } else {
    return `${input} is not a palindrome.`;
  };
};
  


