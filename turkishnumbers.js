function getTurkishNumber(num) {
  var ones = ['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'];
  var tens = ['on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
  var getTen // parseInt(Number(num)/10);
  var getOne // Number(num.toString().charAt(1));
  if (num < 10) {
    return ones[Number(num.toString().charAt(0))];
  } else if (num > 9 && Number(num.toString().charAt(1)) === 0) {
    return tens[Number(num.toString().charAt(0)) - 1];
  } else {
    return tens[((parseInt(Number(num)/10)) - 1)] + ' ' + ones[Number(num.toString().charAt(1))];
  };
};