function findOutlier(integers){
  var count = 0
  var temp = [];
  var check
  for (i=0;i<integers.length;i++) {
    temp[i] = Number.isInteger(integers[i]/2)
    if (temp[i] === true) {
    count = count + Number(1);
    } else {
    continue;
    };
   };
  if (count === 1) {
var check = temp.indexOf(true);
} else {
var check = temp.indexOf(false);
};
   return integers[check];
};