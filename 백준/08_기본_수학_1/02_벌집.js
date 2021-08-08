/**
 * @description
 *    * 위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 
 *    * 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 
 *    * 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 
 *      몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 
 * 
 *    * 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.
 */

// 1 => 1
// 2 ~ 7 => 2
// 8 ~ 19 => 3
// 20 ~ 37 => 4
// 38 ~ 61 => 5

// 1 - 7 - 19 - 37 - 61
// (6*1) - (6*2) - (6*3) - (6*4)

// 6 + 12 + 18 + 24 + 1
// => 61

// 1 + (6 * (n * (n + 1) / 2))
// => 61

const fs = require("fs");
const readline = require("readline");

let num;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    initData(line);
  })
  .on("close", () => {
    calcDistance();
  });

function initData(line) {
  num = Number(line.trim());
}

function calcDistance() {
  let distance = 0;
  let curMaxPosition = 0;

  while(num > curMaxPosition) {
    nextPosition();
  }

  console.log(distance);

  function nextPosition() {
    curMaxPosition = 1 + 6 * (distance * (distance + 1) / 2);
    distance++;
  }
}