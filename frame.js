var output = [];
var newStr = [];
function frame() {
  var i;
  for (i = 0; i < arguments.length; i++) {
    output[i] = (arguments[i].length);
  };
  var top = "";
  var bottom = "";
  for (i=0;i<Math.max(...output) + 4;i++) {
    top = top + "*";
    bottom = bottom + "*";
  };
  for (j=0;j<arguments.length;j++) {
    newStr[j] = arguments[j];
    for (i=0;i<Math.max(...output)-arguments[j].length;i++) {
      newStr[j] = newStr[j] + " ";
    };
    newStr[j] = "* " + newStr[j] + " *";
  };
  console.log(top);
  for (x=0;x<arguments.length;x++) {
    console.log(newStr[x]);
  };
  console.log(bottom);
};