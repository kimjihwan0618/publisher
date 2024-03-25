const sucArr = [];
let x1, x1_e, x2, x2_e, x3, x3_e, x4, x4_e, y, y_e;
//
// 페이지 불러올 시, 쓰레기 순서 셔플
let dragInfoArr = [
  { index: 0, src: "./img/separateCollection/can.svg" },
  { index: 1, src: "./img/separateCollection/plastic.svg" },
  { index: 2, src: "./img/separateCollection/glass.svg" },
  { index: 3, src: "./img/separateCollection/paper.svg" },
];

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
shuffle(dragInfoArr);

const dragItemListEl = document.querySelector("#drag__item__list");
for (let i = 0; i < dragItemListEl.children.length; i++) {
  dragItemListEl.children[i].children[0].src = dragInfoArr[i].src;
  dragItemListEl.children[i].dataset.index = dragInfoArr[i].index;
}

// drag and drop
const dropItemListEl = document.querySelector("#drop__item__list");
window.onload = function () {
  x1 = dropItemListEl.children[0].getBoundingClientRect().x;
  x1_e = dropItemListEl.children[0].getBoundingClientRect().x + 76.8;
  x2 = dropItemListEl.children[1].getBoundingClientRect().x;
  x2_e = dropItemListEl.children[1].getBoundingClientRect().x + 76.8;
  x3 = dropItemListEl.children[2].getBoundingClientRect().x;
  x3_e = dropItemListEl.children[2].getBoundingClientRect().x + 76.8;
  x4 = dropItemListEl.children[3].getBoundingClientRect().x;
  x4_e = dropItemListEl.children[3].getBoundingClientRect().x + 76.8;
  y = dropItemListEl.children[0].getBoundingClientRect().y;
  y_e = dropItemListEl.children[0].getBoundingClientRect().y + 119.99;

  console.log(`캔 : ${x1} ~ ${x1_e}`);
  console.log(`비닐 : ${x2} ~ ${x2_e}`);
  console.log(`유리 : ${x3} ~ ${x3_e}`);
  console.log(`종이 : ${x4} ~ ${x4_e}`);
  console.log(`y : ${y} ~ ${y_e}`);
}


let dragItem = "";
let dragFlag = false;
let startX = 0;
let startY = 0;

const dragStart = (ev) => {
  dragFlag = true;
  dragItem = ev.path[1];
  startX = ev.changedTouches[0].pageX;
  startY = ev.changedTouches[0].pageY;
};

const dragMove = (ev) => {
  ev.preventDefault();
  if (dragFlag) {
    dragItem.style.left = ev.changedTouches[0].pageX - startX + "px";
    dragItem.style.top = ev.changedTouches[0].pageY - startY + "px";
  }
};

const drop = (ev) => {
  ev.preventDefault();
  const data = ev;
  const endX = data.changedTouches[0].pageX;
  const endY = data.changedTouches[0].pageY;
  console.log("x : " + endX);
  console.log("y : " + endY);

  if (y <= endY && y_e >= endY) {
    if (x1 <= endX && x1_e >= endX) {
      if (dragItem.dataset.index === dropItemListEl.children[0].dataset.index) {
        dragItem.style.visibility = "hidden";
        sucArr.push(true);
      }
    } else if (x2 <= endX && x2_e >= endX) {
      if (dragItem.dataset.index === dropItemListEl.children[1].dataset.index) {
        dragItem.style.visibility = "hidden";
        sucArr.push(true);
      }
    } else if (x3 <= endX && x3_e >= endX) {
      if (dragItem.dataset.index === dropItemListEl.children[2].dataset.index) {
        dragItem.style.visibility = "hidden";
        sucArr.push(true);
      }
    } else if (x4 <= endX && x4_e >= endX) {
      if (dragItem.dataset.index === dropItemListEl.children[3].dataset.index) {
        dragItem.style.visibility = "hidden";
        sucArr.push(true);
      }
    }
  }

  dragItem.style.left = "0px";
  dragItem.style.top = "0px";

  startY = 0;
  startX = 0;
  dragFlag = false;

  if (sucArr.length === 4) {
    const subBtn = document.querySelector("#submit");
    subBtn.classList.remove("off__btn");
  }
};
