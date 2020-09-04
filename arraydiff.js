function arrayDiff(a, b) {
  var aNew = []
  var ct = 0
  for (i=0;i<a.length;i++){
    if (b.includes(a[i]) === false) {
      aNew[ct] = a[i];
      ct = ct + Number(1);
    } else {
      continue;
    };
  };
  return aNew;
};