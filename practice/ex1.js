function testStrict(val) {
  if (val == 10) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
var total = testStrict(7);
console.log(total)
// sao dùng testStrict(7) lại ko chạy, mà pải var total = testStrict(7);console.log(total)
// thì mới ra

// anh giải thích dùm em