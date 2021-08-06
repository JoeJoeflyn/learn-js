var arr = [
    [1,2], [3,4], [5,6,7]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log([i]);
      console.log([j]);
      console.log(arr[i][j]);
    }
  };
  // đầu tiên i sẽ đi qua 3 phần tử của mảng arr, sau đó đến lượt j đi qua từng phần tử của mảng i, do phần tử 0 của i gồm [1,2] nên j sẽ chạy hết trong i trước rồi đến lượt i chạy tiếp phần tử tiếp theo