var alphaUpper = []
var alphaLower = []
var up=[]
var lw=[]
for (a=1;a<27;a++) {
  alphaUpper[a] = String.fromCharCode(64 + a);
  alphaLower[a] = String.fromCharCode(96 + a);
};
function caesar(input, shift) {
  if (shift > -26 && shift < 26 && Number.isInteger(shift) == true) {
    output = "";
    for (i=0;i<input.length;i++) {
      if ((alphaUpper.indexOf(input.charAt(i)) == -1) && (alphaLower.indexOf(input.charAt(i)) == -1)) {
      output = output + input.charAt(i);
      } else {
        up[i] = alphaUpper.indexOf(input.charAt(i));
        lw[i] = alphaLower.indexOf(input.charAt(i));
        if (up[i] == -1) {
          if ((Number(lw[i]) + shift) > 26) {
          output = output + alphaLower[(Number(lw[i])+shift) - 26];
          } else if ((Number(lw[i]) + shift) < 1) {
          output = output + alphaLower[(Number(lw[i])+shift) + 26];
          } else {
          output = output + alphaLower[Number(lw[i])+shift];
          };
        } else {
          if ((Number(up[i]) + shift) > 26) {  
          output = output + alphaUpper[(Number(up[i])+shift) - 26];
          } else if ((Number(up[i]) + shift) < 1) {
          output = output + alphaUpper[(Number(up[i])+shift) + 26];
          } else {
          output = output + alphaUpper[Number(up[i])+shift];
          };
        };
      };
    };
    return output;
  };
  return 'Hi. For 2nd parameter, please use an integer > than -26 and < 26';
};