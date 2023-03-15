const buttons = document.getElementsByClassName("list-item");
const img = document.getElementById("img-print");
const txt = document.getElementById("txt-print");
const title = document.getElementById("title-print");

const data = [
  {
    title: "Lorem ipsum",
    img: "img/img_one.webp",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut odio ullamcorper, consequat est tempor, aliquam mi. Etiam luctus sit amet lectus vitae commodo.",
  },
  {
    title: "Lorem ipsum dolor",
    img: "img/img_two.webp",
    txt: "Cras mollis nunc sit amet orci aliquet, quis fringilla elit consequat. Ut blandit vitae tellus ut ornare. Maecenas vitae dapibus nibh. Donec finibus pulvinar porta.",
  },
  {
    title: "Lorem ipsum sit",
    img: "img/img_three.webp",
    txt: "Quisque mattis mattis felis a sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Lorem ipsum amet",
    img: "img/img_four.webp",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut odio ullamcorper, consequat est tempor, aliquam mi. Etiam luctus sit amet lectus vitae commodo.",
  },
  {
    title: "Lorem ipsum consec",
    img: "img/img_five.webp",
    txt: "Cras mollis nunc sit amet orci aliquet, quis fringilla elit consequat. Ut blandit vitae tellus ut ornare. Maecenas vitae dapibus nibh. Donec finibus pulvinar porta.",
  },
  {
    title: "Lorem ipsum adipi",
    img: "img/img_six.webp",
    txt: "Quisque mattis mattis felis a sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Lorem ipsum elit",
    img: "img/img_seven.webp",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut odio ullamcorper, consequat est tempor, aliquam mi. Etiam luctus sit amet lectus vitae commodo.",
  },
  {
    title: "Lorem ipsum cras",
    img: "img/img_eight.webp",
    txt: "Cras mollis nunc sit amet orci aliquet, quis fringilla elit consequat. Ut blandit vitae tellus ut ornare. Maecenas vitae dapibus nibh. Donec finibus pulvinar porta.",
  }
];

let activeElt = undefined;

function changeInfo(elt) {
    if(activeElt !== void 0) {
        activeElt.classList.remove('active');
    }
    img.src = data[elt.dataset.id].img;
    txt.innerHTML = data[elt.dataset.id].txt + '<b>Vivamus pellentesque sapien metus.</b>';
    title.innerHTML = data[elt.dataset.id].title;
    img.alt = data[elt.dataset.id].title;
    elt.classList.add('active');
    activeElt = elt;
}

for (let button of buttons) {
  button.addEventListener("click", function () {
    changeInfo(button);
  });
}
changeInfo(buttons[0]);