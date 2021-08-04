function testElse(val) {
  var result = " nhập số vô đi ba :> ";
  

  if (val > 5) {
    result = "Bigger than 5";
  } if (val <= 5) {
    result = "5 or Smaller";
  }
  // else {
  // result = "5 or Smaller";
  // };
  return result  
}

console.log(testElse());
// ko return dòng result nếu dùng lệnh else, vì đã chia 2 trường hợp r nên nó chỉ lấy cái 2 nếu ko đúng, nên sẽ dư
// ko có dòng return result thì lại là undefind (cần hỏi)
