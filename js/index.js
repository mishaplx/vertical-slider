const up = document.getElementById("up");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const down = document.getElementById("down");
const html = document.querySelector(".container");
//////////////
let counter = 0;

up.addEventListener("click", upFun);

down.addEventListener("click", downFun);

function upFun() {
  const objImages = [
    {
      id: 0,
      images: `url(./images/img${countupImg()}.jpg)`,
      background: `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`,
    },
  ];
  function countupImg() {
    counter++;
    if (counter === 5) {
      counter = 0;
      return counter;
    }
    return counter;
  }
  right.style.background = objImages[0].images;
  left.style.background = objImages[0].background;
}

function downFun() {
  const objImages = [
    {
      id: 0,
      images: `url(./images/img${countdownImg()}.jpg)`,
      background: `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`,
    },
  ];
  function countdownImg() {
    counter--;
    if (counter === -1) {
      counter = 4;
      return counter;
    }
    return counter;
  }
  right.style.background = objImages[0].images;
  left.style.background = objImages[0].background;
}
//////////////
html.addEventListener("mousewheel", (e) => {
  e = e || window.event;
  var delta = e.deltaY || e.detail || e.wheelDelta;
  console.log(delta);
  if (delta > 0) {
    upFun();
  } else if (delta < 0) {
    downFun();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp" || "PageUp") {
    upFun();
  } else if (event.code == "ArrowDown" || "PageDown") {
    downFun();
  }
});

right.addEventListener('mousemove', (event)=>{
  console.log(event.offsetY)
})